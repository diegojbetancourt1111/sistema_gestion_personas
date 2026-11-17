package org.example;

public class Main {
    public static void main(String[] args) {
        PersonaDAO personaDAO = new PersonaDAO();

        // 1. Primero mostramos la lista actual de personas
        System.out.println("1. Lista inicial:");
        personaDAO.listarPersonas();

        // 2. Intentamos eliminar la persona con ID = 1
        System.out.println("\n2. Eliminando registro:");
        personaDAO.eliminar(1);

        // 3. Volvemos a listar para verificar que ya no aparezca
        System.out.println("\n3. Lista actualizada:");
        personaDAO.listarPersonas();
    }
}