<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    public function index()
    {
        Service::all();
        return response()->json(Service::all(), 200);
    }

    public function store(Request $request)
    {
        $service = Service::create($request->all());
        return response()->json($service, 201);
    }

    public function show($id)
    {
        return Service::find($id);
    }

    public function update(Request $request, $id)
    {
        $service = Service::find($id);
        $service->update($request->all());
        return response()->json($service, 200);
    }

    public function destroy($id)
    {
        $service = Service::find($id);
        $service->delete();
        return response()->json(null, 204);
    }
}
