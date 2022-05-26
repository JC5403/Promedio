<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Estudiante extends Model
{
    protected $fillable = [
        'codigo', 'nombres', 'apellidos'
    ];

    protected$table = "estudiantes";
}
