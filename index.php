<?php
include_once "vistas/cursos_guardar.php";

// implementar el proceso de guardado de cursos usando el patron MVC

$cursoControlador = new CursoControlador();
$resultado = $cursoControlador->guardar();

foreach ($resultado as $curso) {
    echo "<li>".$curso["nombre"]."</li>";
}
