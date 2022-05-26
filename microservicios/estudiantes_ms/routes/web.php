<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->get('estudiantes', 'Estudiantecontroller@index');
$router->post('estudiantes', 'EstudianteController@store');
$router->get('estudiantes/{id}', 'EstudianteController@show');
$router->put('estudiantes/{id}', 'EstudianteController@update');
$router->delete('estudiantes/{id}', 'EstudianteController@destroy');