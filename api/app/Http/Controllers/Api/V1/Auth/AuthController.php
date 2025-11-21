<?php

namespace App\Http\Controllers\Api\V1\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request){

        if(auth()->attempt($request->only('email', 'password'))){
            return response()->json(['message' => 'Authorized'], 200, [
                'token' => $request->user()->createToken('invoice')
            ]);
        }

        return response()->json(['message' => 'Not Authorized'], 403);
    }
 
    public function logout(){

    }
}
