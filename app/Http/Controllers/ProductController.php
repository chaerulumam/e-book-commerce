<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Http\Resources\ProductSingleResource;
use App\Http\Resources\UserProductResource;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $products = Product::query()
            ->with('category')
            ->when($request->category, fn ($query, $value) => $query->whereBelongsTo(Category::where('slug', $value)->first()))
            ->select('id', 'price', 'slug', 'name', 'picture', 'category_id')
            ->paginate(12)
            ->withQueryString();
        // return ProductResource::collection($products);
        return Inertia('Products/Index', [
            'products' => ProductResource::collection($products)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, Product $product)
    {
        $isProductBougth = $request->user() ? $request->user()->products()->find($product->id) : null;
        return Inertia('Products/Show', [
            'product' => ProductSingleResource::make($product->load('category')),
            'isProductBought' => $isProductBougth
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    public function mine(Request $request)
    {
        $products = $request->user()->products()->latest()->paginate(5)->withQueryString();
        
        return inertia('Products/Mine', [
            'products' => UserProductResource::collection($products)
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
    }
}
