<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\ProductCart;
use App\Models\ProductList;
use App\Models\User;


class ProductCartController extends Controller
{
    public function addToCart(Request $request){
        $user_name= $request->input('user_name');
        $email = $request->input('email');
        $product_code = $request->input('product_code');
        $quantity = $request->input('quantity'); 

        $productDetails = ProductList::where('product_code',$product_code)->get();

        $price = $productDetails[0]['price'];
        $special_price = $productDetails[0]['special_price'];

        if($special_price== "na"){
            $total_price = $price* $quantity;
            $unit_price = $price;
        }else{
            $total_price = $special_price*$quantity;
            $unit_price = $special_price;
        }

        $result = ProductCart::insert([
            'user_name'=> $user_name,
            'email' => $email,
            'image' => $productDetails[0]['image'],
            'product_name' => $productDetails[0]['title'],
           
         
            'quantity' => $quantity,
            'unit_price' => $unit_price,
            'total_price' => $total_price, 

        ]);

        return $result;
        }

        public function CartCount(Request $request){
            $product_code = $request->product_code;
            $result = ProductCart::count();
            return $result;
        } // End Method 


        public function getUserProductData($username)
{
    $userData = DB::table('users')
        ->join('product_carts', 'users.username', '=', 'product_carts.user_name')
        ->where('users.username', $username)
        ->get();

    // Now $userData contains all the data where the username matches in both tables

    return $userData ;
}

public function CartDetails(Request $request){
   
    $result = ProductCart::latest()->get();
    return $result;
} // End Method 
   
    }

