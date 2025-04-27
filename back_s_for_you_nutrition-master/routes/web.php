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

$router->get('/productos', 'ExampleController@productos');

require_once 'ProductController.php';
use App\Http\Controllers\ProductController;

$router->post('/productos', [ProductController::class, 'store']);

$router->get('/productos', 'ProductController@index');

