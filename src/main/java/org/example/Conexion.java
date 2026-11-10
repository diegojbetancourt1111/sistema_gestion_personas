package org.example;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {
    private static final String URL = "jdbc:postgresql://localhost:5432/sistema_gestion_personas";
    private static final String USER = "postgres";
    private static final String PASSWORD = "Diego11";

    public static  Connection conectar() {
        Connection conexion = null;
        try {
            conexion = DriverManager.getConnection(URL, USER,PASSWORD);
            System.out.println("¡Conexion exitosa a la base de datos sistema_gestion_personas!");
        } catch (SQLException e) {
            System.out.println("¡Error de conexion!");
            e.printStackTrace();
        }
        return conexion;

    }
}
