<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Nota extends Model
{
    protected $fillable = [
        'codigo','actividad','nota', 'codigo_estudiante'
    ];

    protected$table = "estudiantes";
}
