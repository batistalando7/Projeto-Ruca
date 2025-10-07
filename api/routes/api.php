<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

