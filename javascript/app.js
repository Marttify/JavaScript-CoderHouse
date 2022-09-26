









// if (producto == "Mate") {
//     // mostrar la tarjeta del Mate coompleta
    
// } else if (producto == "Termo"){
//     // mostrar la tarjeta del Termo completa

// } else if (producto == "Bombilla") {
//     // mostrar la tarjeta del Bombilla completa
    
// } else {
//     // mostrar la card faltante
 
// }


// //ejercicio: pedirle al usuario el año de vencimiento de su registro de conducir
// let anioVencimiento = parseInt(prompt("Ingrese su fecha de vencimiento del carnet de conducir"))
// const anioDeVencimiento = 2023

// //comparando con el año actual se imprime un mensaje que dirá...
// if (anioVencimiento > anioDeVencimiento) {
//     //  si el registro esta vencido 
//     console.log("ya vencio");

// } else if (anioVencimiento == anioDeVencimiento){
//     // o por vencer
//     console.log("Esta por vencer");

// } else {
//     //o si aun no esta vencido
//     console.log("Esta al dia");
// }



// for (let i=1;i<=10;i++){
//     if(i%2==0){
//         continue;
//     }
//     console.log(i);
// }


//Solicitar a un alumno 3 notas de la materia informatica,
const cant = parseInt(prompt("Ingrese la cantidad de alumnos"))



// Siclo por conteo
for (let i=1;i<=cant;i++){
    const nota = parseInt(prompt(`Ingrese la nota ${i}`))
    totalNota += nota
    if (nota >= 7) {
        // Si el promedio es mayor o igual a 7 entonces informarle que aprobó la materia
        alert(aprobo);
    } else {
        // sino que debe recuperar.
        alert(recupera);
    }
}
const promedio = (totalNota*cant) / 100

// y luego mostrarle el promedio de las mismas.
if (promedio > 0) {
    console.log(`El promedio es de: ${promedio}`);
} else {
    console.log("Su promedio es cero o no se ingresaron datos!");
}

// y luego mostrarle el promedio de las mismas.( alternativa sin condicional para verificar si se ingresaron datos)
console.log(`El promedio es de : ${promedio}`);



