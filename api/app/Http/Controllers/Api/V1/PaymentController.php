<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Payment;

class PaymentController extends Controller
{

    public function index()
    {
        return Payment::orderByDesc('created_at')->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'amount' => 'required|numeric',
            'gas_station_id' => 'required|exists:gas_stations,id',
        ]);

        $payment = Payment::create($request->all());

        return response()->json($payment, 201);
    }

    public function show(Payment $payment)
    {
        return response()->json($payment);
    }

    public function update(Request $request, Payment $payment)
    {
        $request->validate([
            'amount' => 'required|numeric',
            'gas_station_id' => 'required|exists:gas_stations,id',
        ]);

        $payment->update($request->all());

        return response()->json($payment);
    }

    public function destroy(Payment $payment)
    {
        $payment->delete();

        return response()->json(null, 204);
    }
}
