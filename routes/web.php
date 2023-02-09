<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\PaymentNotificationController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

// auth()->loginUsingId(1);

Route::get('', HomeController::class)->name('home');




Route::get('products/me', [ProductController::class, 'mine'])->middleware('auth')->name('products.mine');
Route::resource('products', ProductController::class);

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', DashboardController::class)->name('dashboard');

    Route::get('carts', [CartController::class, 'index']);
    Route::post('carts/add-to-cart/{product:slug}', [CartController::class, 'store'])->name('cart.store');
    Route::delete('carts/delete/{cart}', [CartController::class, 'destroy'])->name("cart.delete");

    Route::post('invoice', [InvoiceController::class, 'store']);
    Route::get('invoice/{invoice:order_id}', [InvoiceController::class, 'show'])->name('invoice.show');
});

Route::post('api/notification/handling', [PaymentNotificationController::class, 'hit']);

require __DIR__ . '/auth.php';
