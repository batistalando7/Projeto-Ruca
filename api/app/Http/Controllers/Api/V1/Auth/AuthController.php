<?php

namespace App\Http\Controllers\Api\V1\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum')->only('logout');
    }
    
    public function login(Request $request){

       $data = $request->validate([
        'email' => ['required', 'email'],
        'password' => ['required', 'string', 'min:8']
       ]);

       $user = User::where('email', $data['email'])->first();

       if(! $user || ! Hash::check($data['password'], $user->password)){
        return response()->json([
            'message' => 'Invalid credentials.'
        ], 401);
       }

       $token = $user->createToken('invoice')->plainTextToken;

       return response()->json([
           'message' => 'Login successful.',
           'token' => $token,
              'user' => [
                'id' => $user->id,
                'email' => $user->email,
              ],
       ], 200);
    }
 
    public function logout(Request $request){

        $request->user()->currentAccessToken()->delete();

        return response()->json(['message' => 'Logout successful.'], 200);
    }
}
