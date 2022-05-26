<?php

namespace App\Http\Controllers;

use App\Models\Nota;
use Illuminate\Http\Request;
use Mockery\Matcher\NotAnyOf;

class EstudianteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $notas = Nota::all();
        return response()->json(["data "=> $notas]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $dataRequest = $request ->json()->all();
        $registro = Nota ::create($dataRequest);
        return response()->json(["data" =>$registro]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $registro = Nota::find($id);
        return response()->json(["data" =>$registro]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $registro = Nota::find($id);
        if (empty($registro)) {
            return response()->json(["data" => "El registro no existe"]);
        }
        $dataRequest = $request->json()->all();
        $registro->update($dataRequest);
        return response()->json(["data" =>$registro]);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    
        {
            $registro = Nota::find($id);
            if (empty($registro)) {
                return response()->json(["data" => "El registro no existe"], 404);
            }
            $registro->delete();
            return response()->json(["data" =>"Nota eliminada"]);
    
        }
}
