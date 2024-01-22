<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\ProductCartController;
use App\Http\Controllers\ProductDetailsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::group([
    'middleware' => ['api'],
    'prefix' => 'auth'
], function ($router) {
    Route::post('login', [App\Http\Controllers\AuthController::class, 'login']);
    Route::get('me', [App\Http\Controllers\AuthController::class, 'me']);
Route::post('register', [App\Http\Controllers\AuthController::class, 'register']);
Route::post('logout', [App\Http\Controllers\AuthController::class, 'logout']);




});

Route::get('/productList/{remark}', [ProductController::class, 'ProductListByRemark']);
Route::get('/allProduct', [ProductController::class, 'AllProduct']);
Route::get('/allvendor', [ProductController::class, 'AllVendor']);

Route::get('/allActiveProduct', [ProductController::class, 'getActiveProduct']);
Route::post('/activeStatus/{id}', [ProductController::class, 'activeStatus']);
Route::get('/deleteProduct/{id}', [ProductController::class, 'DeleteProduct']);
Route::get('/deleteVendor/{id}', [ProductController::class, 'DeleteVendor']);

Route::post('/storeProduct', [ProductController::class, 'StoreProduct']);
Route::get('/CartDetails', [ProductCartController   ::class, 'CartDetails']);

Route::get('/user-product-data/{username}', [ProductCartController::class, 'getUserProductData']);


// Product Details Route
Route::get('/productdetails/{id}',[ProductDetailsController::class, 'ProductDetails']);

Route::post('/addToCart', [ProductCartController::class, 'addToCart']);

Route::get('/cartcount/{product_code}', [ProductCartController::class, 'CartCount']);



