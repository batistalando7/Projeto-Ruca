<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\GasStation;

class GasStationController extends Controller
{

    public function index()
    {
        return GasStation::orderByDesc('created_at')->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'discount' => 'nullable|numeric',
            'price' => 'required|numeric',
        ]);

        $gasStation = GasStation::created($request->all());

        return response()->json($gasStation, 201);
    }

    public function show(GasStation $gasStation)
    {
        return $gasStation;
    }

    public function update(Request $request, GasStation $gasStation)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'discount' => 'nullable|numeric',
            'price' => 'required|numeric',
        ]);

        $gasStation->update($request->all());

        return response()->json($gasStation);
    }

    public function destroy(GasStation $gasStation)
    {
        $gasStation->delete();

        return response()->json(null, 204);
    }
}
