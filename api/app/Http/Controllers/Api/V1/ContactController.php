<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{

    public function index()
    {
        return Contact::all();
    }

    public function store(Request $request)
    {
        $contact = Contact::create($request->all());
        return response()->json($contact, 201);
    }

    public function show(Contact $contact)
    {
        return $contact;
    }

    public function update(Request $request, Contact $contact)
    {
        $contact->update($request->all());
        return response()->json($contact, 200);
    }

    public function destroy(Contact $contact)
    {
        $contact->delete();
        return response()->json(null, 204);
    }
}
