<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class CartController extends Controller
{
    public function __construct()
    {
        return $this->middleware('auth');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Product $product)
    {
        $product->carts()->updateOrCreate(
        [
            'user_id' => $request->user()->id,
            'product_id' => $product->id,
        ], 
        [
            'user_id' => $request->user()->id,
            'price' => $product->price,
        ]);
        Cache::forget('carts_global_count');
        return back();
    }

    public function index()
    {
        //
    }


    
    public function destroy(Cart $cart)
    {
        //
    }
}
