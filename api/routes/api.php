<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\Auth\AuthController;

/* 
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
}); */

/* User ruote */

Route::apiResource('/V1/users', 'Api\V1\UserController');

/* Category route*/
Route::apiResource('/V1/categories', 'Api\V1\CategoryController');

/* Service route */
Route::apiResource('/V1/services', 'Api\V1\ServiceController');

/* Invoice route */
Route::apiResource('/V1/invoices', 'Api\V1\InvoiceController');

/* contact route */
Route::apiResource('/V1/contacts', 'Api\V1\ContactController');

/* auth routes */

Route::post('/V1/logout', 'Api\V1\Auth\AuthController@logout');

Route::post('/V1/login', 'Api\V1\Auth\AuthController@login');
