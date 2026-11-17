// 1. Array de objetos en memoria (Simula el estado devuelto por Java/PostgreSQL)
let listaPersonas = [
    { id: 1, nombre: "Carlos Pérez", correo: "carlos.perez@email.com", edad: 28 },
    { id: 2, nombre: "Ana Gómez", correo: "ana.gomez@email.com", edad: 25 },
    { id: 3, nombre: "Diego Betancourt", correo: "diego@email.com", edad: 30 }
];

// Contador para generar IDs únicos simulación
let siguienteId = 4;

// -------------------------------------------------------------
// CONCEPTO CLAVE 1: Uso de MAP para transformar objetos a HTML y renderizar la tabla
// -------------------------------------------------------------
function renderizarTabla(datos) {
    const tablaCuerpo = document.getElementById("tablaCuerpo");

    // Recorremos el arreglo con .map() transformando cada objeto en una fila HTML (tr/td)
    const filasHTML = datos.map(persona => {
        return `
            <tr>
                <td>${persona.id}</td>
                <td>${persona.nombre}</td>
                <td>${persona.correo}</td>
                <td>${persona.edad}</td>
                <td>
                    <button class="btn-delete" onclick="eliminarPersona(${persona.id})">
                        Eliminar
                    </button>
                </td>
            </tr>
        `;
    });

    // Inyectamos el resultado acumulado dentro del tbody del HTML
    tablaCuerpo.innerHTML = filasHTML.join('');
}

// -------------------------------------------------------------
// CONCEPTO CLAVE 2: Captura de inputs y manipulación del arreglo
// -------------------------------------------------------------
function agregarPersona() {
    const nombre = document.getElementById("nombreInput").value.trim();
    const correo = document.getElementById("correoInput").value.trim();
    const edad = parseInt(document.getElementById("edadInput").value);

    // Validación básica de campos obligatorios
    if (!nombre || !correo || isNaN(edad)) {
        alert("Por favor completa todos los campos correctamente.");
        return;
    }

    // Creación de un objeto en JavaScript
    const nuevaPersona = {
        id: siguienteId++,
        nombre: nombre,
        correo: correo,
        edad: edad
    };

    // Agregamos el objeto al arreglo principal
    listaPersonas.push(nuevaPersona);

    // Limpiamos las cajas de texto de la pantalla
    document.getElementById("nombreInput").value = "";
    document.getElementById("correoInput").value = "";
    document.getElementById("edadInput").value = "";

    // Volvemos a pintar la tabla para refrescar los cambios
    renderizarTabla(listaPersonas);
}

// -------------------------------------------------------------
// CONCEPTO CLAVE 3: Uso de FILTER para buscar/filtrar en tiempo real
// -------------------------------------------------------------
function filtrarPersonas() {
    const textoBusqueda = document.getElementById("buscarInput").value.toLowerCase();

    // .filter() crea un nuevo arreglo conservando únicamente las personas que coinciden con la búsqueda
    const resultadoFiltrado = listaPersonas.filter(persona => {
        return persona.nombre.toLowerCase().includes(textoBusqueda) ||
            persona.correo.toLowerCase().includes(textoBusqueda);
    });

    // Renderizamos únicamente el resultado filtrado
    renderizarTabla(resultadoFiltrado);
}

// -------------------------------------------------------------
// CONCEPTO CLAVE 4: Uso de FILTER para eliminar un elemento por ID
// -------------------------------------------------------------
function eliminarPersona(idAEliminar) {
    // Conservamos todas las personas EXCEPTO la que coincida con el ID enviado
    listaPersonas = listaPersonas.filter(persona => persona.id !== idAEliminar);

    // Refrescamos la tabla visual
    renderizarTabla(listaPersonas);
}

// Carga inicial al abrir la página web por primera vez
renderizarTabla(listaPersonas);