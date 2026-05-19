// ======================================================
// ARCHIVO: gestion_datos.js
// Tema: Objetos, Sets y Maps en JavaScript
// ======================================================



// ======================================================
// TASK 1
// CREACIÓN DEL OBJETO DE PRODUCTOS
// ======================================================

// Creamos un arreglo de objetos con información de productos
const productos = [
    {
        id: 1,
        nombre: "Laptop",
        precio: 3500
    },
    {
        id: 2,
        nombre: "Mouse",
        precio: 120
    },
    {
        id: 3,
        nombre: "Teclado",
        precio: 250
    }
];



// ======================================================
// TASK 5
// VALIDACIONES DE PRODUCTOS
// ======================================================

// Función para validar cada producto
function validarProducto(producto) {

    // Validar ID
    if (!producto.id || typeof producto.id !== "number") {
        console.log("Error: ID inválido");
        return false;
    }

    // Validar nombre
    if (!producto.nombre || typeof producto.nombre !== "string") {
        console.log("Error: Nombre inválido");
        return false;
    }

    // Validar precio
    if (!producto.precio || typeof producto.precio !== "number") {
        console.log("Error: Precio inválido");
        return false;
    }

    return true;
}



// ======================================================
// MOSTRAR PRODUCTOS VÁLIDOS
// ======================================================

console.log("========== LISTA DE PRODUCTOS ==========");

productos.forEach((producto) => {

    // Validamos cada producto antes de mostrarlo
    if (validarProducto(producto)) {
        console.log(producto);
    }

});



// ======================================================
// TASK 2
// USO DE SET EN JAVASCRIPT
// ======================================================

// Creamos un Set con números repetidos
const numeros = new Set([1, 2, 3, 3, 4, 5, 5, 6]);

console.log("\n========== SET ORIGINAL ==========");
console.log(numeros);

// Agregar un nuevo número
numeros.add(10);

console.log("\n========== SET DESPUÉS DE ADD ==========");
console.log(numeros);

// Verificar si existe un número
console.log("\n¿Existe el número 4?");
console.log(numeros.has(4));

// Eliminar un número
numeros.delete(2);

console.log("\n========== SET DESPUÉS DE DELETE ==========");
console.log(numeros);

// Recorrer el Set con for...of
console.log("\n========== RECORRIDO DEL SET ==========");

for (const numero of numeros) {
    console.log(numero);
}



// ======================================================
// TASK 3
// CREACIÓN DE UN MAP
// ======================================================

// Creamos un Map para relacionar categoría y producto
const categorias = new Map();

// Agregamos datos al Map
categorias.set("Tecnología", "Laptop");
categorias.set("Accesorios", "Mouse");
categorias.set("Periféricos", "Teclado");



// ======================================================
// TASK 4
// ITERACIÓN SOBRE ESTRUCTURAS DE DATOS
// ======================================================


// ------------------------------------------------------
// FOR...IN EN OBJETOS
// ------------------------------------------------------

console.log("\n========== FOR...IN EN OBJETOS ==========");

for (const indice in productos) {

    console.log(`Producto ${Number(indice) + 1}`);

    for (const propiedad in productos[indice]) {
        console.log(
            `${propiedad}: ${productos[indice][propiedad]}`
        );
    }

}


// ------------------------------------------------------
// FOR...OF EN SET
// ------------------------------------------------------

console.log("\n========== FOR...OF EN SET ==========");

for (const valor of numeros) {
    console.log(valor);
}


// ------------------------------------------------------
// FOREACH EN MAP
// ------------------------------------------------------

console.log("\n========== FOREACH EN MAP ==========");

categorias.forEach((valor, clave) => {
    console.log(`Categoría: ${clave} -> Producto: ${valor}`);
});



// ======================================================
// MÉTODOS DE OBJETOS
// Object.keys()
// Object.values()
// Object.entries()
// ======================================================

console.log("\n========== MÉTODOS DE OBJETOS ==========");

// Tomamos el primer producto como ejemplo
const productoEjemplo = productos[0];


// Object.keys()
console.log("\nObject.keys()");
console.log(Object.keys(productoEjemplo));


// Object.values()
console.log("\nObject.values()");
console.log(Object.values(productoEjemplo));


// Object.entries()
console.log("\nObject.entries()");
console.log(Object.entries(productoEjemplo));



// ======================================================
// RESULTADOS FINALES
// ======================================================

console.log("\n========== RESULTADOS FINALES ==========");

// Lista completa de productos
console.log("\nProductos:");
console.log(productos);

// Lista única usando Set
console.log("\nProductos únicos (Set de números):");
console.log(numeros);

// Categorías y nombres de productos
console.log("\nMap de categorías:");
console.log(categorias);