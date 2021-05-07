<?php
include_once "clases/Curso.php";

class CursoControlador
{
    public function mostrar(){
        $curso =  new Curso();
        return $curso->mostrar();
    }
}