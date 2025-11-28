<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GasStation extends Model
{
    protected $table = 'gas_stations';
    protected $guarded = ['id'];

    function payments()
    {
        return $this->hasMany(Payment::class);
    }
}
