<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ProductList;
use App\Models\ProductDetails;
use Image;

class ProductController extends Controller
{
    public function ProductListByRemark(Request $request){
        $remark =$request->remark;
        $productlist=  ProductList :: where('remark',$remark)->get();
        return $productlist;
    }

    public function AllProduct(){
       
        $allProduct=  ProductList ::latest()->get() ;
        return $allProduct;
    }

    
    public function StoreProduct(Request $request){

        $request->validate([
           'product_code' => 'required',
       ],[
           'product_code.required' => 'Input Product Code'

       ]);

       $image = $request->file('image');
       $name_gen = hexdec(uniqid()).'.'.$image->getClientOriginalExtension();
       Image::make($image)->resize(711,960)->save('upload/product/'.$name_gen);
       $save_url = 'http://127.0.0.1:8000/upload/product/'.$name_gen;

       $product_id = ProductList::insertGetId([
        'user_id' => $request->user_id,
           'title' => $request->title,
           'price' => $request->price,
           'special_price' => $request->special_price,
           'category' => $request->category,
           'subcategory' => $request->subcategory,
           'remark' => $request->remark,
           'status' => $request->status, 
           'product_code' => $request->product_code,
           'image' => $save_url, 

       ]);

       /////// Insert Into Product Details Table ////// 

  

       ProductDetails::insert([
           'product_id' => $product_id,
          
           'short_description' => $request->short_description,
         
           'long_description' => $request->long_description,

       ]);


  

       return response()->json([
        'message' => 'Product inserted successfully',
        'product_id' => $product_id,
    ]);


   } // End Method 


    
}
