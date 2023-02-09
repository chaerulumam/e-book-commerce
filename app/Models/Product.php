<?php

namespace App\Models;

// use App\Traits\HasManyCarts;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    // use HasManyCarts;

    protected $guarded = [];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function carts()
    {
        return $this->hasMany(Cart::class);
    }

}
