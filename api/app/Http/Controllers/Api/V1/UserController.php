<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:sanctum')->except(['index', 'show']);
    }

    public function index()
    {
        return User::all();
    }
    public function store(Request $request)
    {
        $user = User::create($request->all());
        return response()->json($user, 201);
    }
    public function show(User $user)
    {
        return $user;
    }
    public function update(Request $request, User $user)
    {
        $user->update($request->all());
        return response()->json($user, 200);
    }
    public function destroy(User $user)
    {
        $user->delete();
        return response()->json(null, 204);
    }
}
