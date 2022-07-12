/*
    Create
    Read
    Update
    Delete
*/
//    posicion:   0,      1     ,  2   ,  3
let vectorLoco = [1, "Usuario x", false, 3.4];


//Read

/**
 * Muestra el vector mediante consola
 * @param {Array} vector a mostrar
 */
function mostrarVector(vector){
    console.log("------Mostrando-----");
    console.log("Tamaño actual del vector: ",vector.length, "\n");
    for (let i = 0; i < (vector.length); i++) {
        console.log(vector[i]);   
    }
    console.log("---------Fin--------");
}

mostrarVector(vectorLoco);
//Agregar un nuevo elemento al vector
vectorLoco.push("Usuario U");
mostrarVector(vectorLoco);


//Actualizar una posicion existente
vectorLoco[1] = "Usuario Z";
mostrarVector(vectorLoco);


//Eliminar un elemento
let posEliminar = 2;
let cantEliminar = 1;

vectorLoco.splice(posEliminar, cantEliminar);
mostrarVector(vectorLoco);