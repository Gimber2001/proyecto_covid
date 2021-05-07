<?php
include_once "config/ConexionDB.php";

class Curso
{
    private $id;
    private $nombre;

    public function mostrar(){
        try {
            $objConexion = new ConexionDB();
            $conexion = $objConexion->abrir();
            $query = "SELECT * FROM cursos";
            $resultado = $conexion->query($query);
            $objConexion->cerrar();
        }catch (PDOException $e){
            echo "Error: ".$e->getMessage();
            exit();
        }
        return $resultado;
    }

    public function guardar(){
        return null;
    }

    public function actualizar(){
        return null;
    }

    public function eliminar(){
        return null;
    }


    php <?
private email;
    private contraseña;
    private; <script><script>"hols(string29)"


