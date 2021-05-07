<?php
include_once "controladores/CursoControlador.php";

$cursoControlador = new CursoControlador();
$resultado = $cursoControlador->mostrar();

foreach ($resultado as $curso) {
    echo "<li>".$curso["nombre"]."</li>";
}

