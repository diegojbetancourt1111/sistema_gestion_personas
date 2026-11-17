package org.example;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class PersonaDAO {

    public void insertar(Persona persona) {
        String sql = "INSERT INTO personas (nombre, correo, edad) VALUES (?, ?, ?)";

        try (Connection conexion = Conexion.conectar();
             PreparedStatement pstmt = conexion.prepareStatement(sql)) {

            pstmt.setString(1, persona.getNombre());
            pstmt.setString(2, persona.getCorreo());
            pstmt.setInt(3, persona.getEdad());

            pstmt.executeUpdate();
            System.out.println("¡Persona registrada exitosamente en la base de datos!");

        } catch (SQLException e) {
            System.err.println("Error al insertar la persona: " + e.getMessage());
        }
    }

    public void listarPersonas() {
        String sql = "SELECT id, nombre, correo, edad FROM personas";

        try (Connection conexion = Conexion.conectar();
             PreparedStatement pstmt = conexion.prepareStatement(sql);
             ResultSet resultado = pstmt.executeQuery()) {

            System.out.println("--- LISTA DE PERSONAS EN LA BASE DE DATOS ---");
            while (resultado.next()) {
                int id = resultado.getInt("id");
                String nombre = resultado.getString("nombre");
                String correo = resultado.getString("correo");
                int edad = resultado.getInt("edad");

                System.out.println("ID: " + id + " | Nombre: " + nombre + " | Correo: " + correo + " | Edad: " + edad);
            }
            System.out.println("---------------------------------------------");

        } catch (SQLException e) {
            System.err.println("Error al consultar las personas: " + e.getMessage());
        }
    }

    public void eliminar(int id){
        String sql = "DELETE FROM personas WHERE id = ?";

        try (Connection conexion = Conexion.conectar();
             PreparedStatement pstmt = conexion.prepareStatement(sql)){

            pstmt.setInt(1,id);

            int filasAfectadas = pstmt.executeUpdate();

            if (filasAfectadas > 0){
                System.out.println("¡Persona con ID" + id + "eliminada exitosamente!");

            } else {
                System.out.println(("No se encontro ninguna persona con el ID: "+ id));

            }

        } catch (SQLException e) {
            System.err.println("Error al eliminar la persona: " + e.getMessage());
        }
    }
}
