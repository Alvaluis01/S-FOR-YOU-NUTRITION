<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    // Nombre de la tabla en la base de datos
    protected $table = 'producto';

    // Los campos que pueden ser asignados masivamente
    protected $fillable = [
        'Nombre', 
        'Precio', 
        'Disponibilidad', 
        'Id_ingrediente', 
        'Id_cantidad_ingrediente', 
        'Descripcion', 
        'Tamaño', 
        'Calorias'
    ];

    // Si quieres definir relaciones, puedes hacerlo aquí, por ejemplo:
    // public function ingrediente() {
    //     return $this->belongsTo(Ingrediente::class, 'Id_ingrediente');
    // }
}
