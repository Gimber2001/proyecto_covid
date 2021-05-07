<?php
include_once "clases/Curso.php";
class CursoControlador
{
    public function mostrar(): PDOStatement{
        $curso = new curso();
        return $curso->mostrar();
    }

    public function guardar(Strinh $nombre): String{
        $curso = new Curso();
        $curso->setNombre($nombre);
        if($curso->guardar()!=0){
            echo ""
        }
    }
}

