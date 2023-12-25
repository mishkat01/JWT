<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProductList;
use App\Models\ProductDetails;

class ProductDetailsController extends Controller
{
    public function ProductDetails(Request $request){

        $id = $request->id;

        $productDetails = ProductDetails::where('product_id',$id)->get();
        $productList = ProductList::where('id',$id)->get();

         $item = [
                'productDetails' => $productDetails,
                'productList' => $productList,                 
            ];

            return $item;

    } // End Method 
}
