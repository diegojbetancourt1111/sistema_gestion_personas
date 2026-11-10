# Sistema de Gestión de Personas (Backend Java / JDBC)

Backend desarrollado en Java con un enfoque nativo en conectividad a bases de datos relacionales mediante JDBC, priorizando el manejo de excepciones, la limpieza de código y una estructura modular ideal para proyectos de portafolio.

## Stack Tecnológico

* **Lenguaje:** Java 17 (Eclipse Temurin)
* **Gestor de dependencias:** Maven
* **Base de datos:** PostgreSQL 
* **Herramienta de gestión:** pgAdmin 4
* **Librería de conexión:** PostgreSQL JDBC Driver (`v42.7.2`)

---

## Estructura de la Base de Datos

La aplicación interactúa con una base de datos local llamada `sistema_gestion_personas`. La tabla principal se estructura de la siguiente manera:

* **Nombre de la tabla:** `personas`
* **Campos:**
  * `id`: `SERIAL` (Clave primaria autoincremental)
  * `nombre`: `VARCHAR` (Nombre completo del registro)
  * `correo`: `VARCHAR` (Correo electrónico único)
  * `edad`: `INT` (Edad del registro)

---

## Configuración y Conexión

La conectividad está centralizada en la clase `Conexion.java`, utilizando la clase `DriverManager` de Java SQL junto con un bloque `try-catch` para el control de errores de conexión (`SQLException`).

* **URL de conexión JDBC:** 
  ```text
  jdbc:postgresql://localhost:5432/sistema_gestion_personas
