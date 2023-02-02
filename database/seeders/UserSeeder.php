<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        collect([
            [
                'name' => 'Chaerul Umam',
                'email' => 'umam@example.com',
                'email_verified_at' => now(),
                'password' => bcrypt('password'),
            ],

            [
                'name' => 'Citra Lara',
                'email' => 'citra@example.com',
                'email_verified_at' => now(),
                'password' => bcrypt('password'),
            ]
        ])->each( fn ($query) => User::create($query));
    }
}
