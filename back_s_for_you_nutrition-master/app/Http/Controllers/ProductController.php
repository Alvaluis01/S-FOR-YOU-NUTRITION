<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    // Función para agregar un producto
    public function store(Request $request)
    {
        // Validación de los datos de entrada
        $validated = $request->validate([
            'Nombre' => 'required|string|max:255',
            'Precio' => 'required|numeric',
            'Disponibilidad' => 'required|boolean',
            'Id_ingrediente' => 'required|integer',
            'Id_cantidad_ingrediente' => 'required|integer',
            'Descripcion' => 'required|string|max:255',
            'Tamaño' => 'required|integer',
            'Calorias' => 'required|integer',
        ]);

        // Crear el producto en la base de datos
        $product = Product::create($validated);

        return response()->json($product, 201);
    }
}
