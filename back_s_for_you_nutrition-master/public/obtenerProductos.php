

<?php
// Establecer la conexión a la base de datos
$host = 'localhost';
$dbname = 's___for_you_nutrition';
$username = 'root';
$password = '';
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Consulta para obtener productos
    $stmt = $pdo->query("SELECT * FROM producto");

    // Obtener los resultados
    $productos = $stmt->fetchAll(PDO::FETCH_ASSOC);

    error_log(print_r($productos, true)); // Esto imprimirá los productos en los logs del servidor


    if ($productos) {
        echo json_encode($productos);
    } else {
        echo json_encode(['message' => 'No hay productos disponibles']);
    }
} catch (PDOException $e) {
    echo "Error de conexión: " . $e->getMessage();
}

?>

