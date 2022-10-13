<!-- Son ejercicios dictados en clases, c/u los ralizaba individualmente y luego se evaluaba con el tutor a cargo o en la misma clase -->

## Conditional
```JavaScript
    /*----------------------------------------------------------*/

    //ejercicio: pedirle al usuario el año de vencimiento de su registro de conducir
    let anioVencimiento = parseInt(prompt("Ingrese su fecha de vencimiento del carnet de conducir"))
    const anioDeVencimiento = 2023

    //comparando con el año actual se imprime un mensaje que dirá...
    if (anioVencimiento > anioDeVencimiento) {
        //  si el registro esta vencido 
        console.log("ya vencio");

    } else if (anioVencimiento == anioDeVencimiento){
        // o por vencer
        console.log("Esta por vencer");

    } else {
        //o si aun no esta vencido
        console.log("Esta al dia");
    }

```

```JavaScript
    /*----------------------------------------------------------*/

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

```

## Function
```JavaScript

    // Clase 5 - Objetos
    /*----------------------------------------------------------*/

    const ejemploProduct1 = {
        nombre: "maceta",
        color: "verde",
        id: "2",
        tamano: "chico",
    }

    // Llamado 
    console.log(ejemploProduct1.id);
    console.log(ejemploProduct1.nombre);
    console.log(ejemploProduct1.color);
    console.log(ejemploProduct1.tamano);


    function EjemploProduct2(nombre,color,id,tamano) {
        this.nombre = nombre;
        this.color = color;
        this.id = id;
        this.tamano = tamano;
    }


    const produc1 = new EjemploProduct2("maceta" , "verde", 2, "chico");
    const produc2 = new EjemploProduct2("maceta" , "roja", 2, "mediano");
    const produc3 = new EjemploProduct2("maceta" , "amarilla", 2, "grande");
    const produc4 = new EjemploProduct2("maceta", "violeta", 2, "chico");


    produc1.length // pasa la cantidad de espacios ocupados.
    produc1.toLowerCase() // pasa las letras a minuscula.
    produc1.toUpperCase() // pasa las letras a mayusculas.



    // funciones anonimas ejemplo: function () {}
    function Automovil(marca,modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.mostrarAuto = function () { console.log(`Soy un ${this.marca} ${this.modelo}`); }
    }


    const auto1 = new Automovil("ford","falcon");
    console.log(auto1);

```




## AfterClass 1
``` JavaScript

    
    /*----------------------------------Ejercicio 1: Cotizaciones----------------------------------*/
    /*
    Codificar dos funciones:

    Una función quoteDollar(pesos), la cual recibe un valor monetario en pesos argentinos, y 
    lo retorna en su equivalente en dólares.

    Una función quotePesos(dolar), que recibe un valor monetario en dólares, y 
    lo retorna en su equivalente en pesos argentinos.

    Luego invocar las funciones solicitando  al usuario el valor y el tipo de cotización a realizar.
    */

    const DOLLAR_PURCHASE=284;
    const DOLLAR_SALES=288;

    function quoteDollar(pesos){
        let conversionDolar = pesos / DOLLAR_SALES;
        return conversionDolar;
    }

    function quotePesos(dollar){
        let weightConversion = dollar * DOLLAR_PURCHASE;
        return weightConversion;
    }

    let quoteType = prompt("***** COTIZADOR *****\n1-Cambiar pesos a dolares\n2-Cambiar dolares a pesos\n3-Para salir ingrese 0");

    while (quoteType !== "1" || quoteType !== "2") {
        if(quoteType === "1"){
            let pesosInExchange = parseFloat(prompt("Ingresa la cantidad en pesos"));
            let dollar = quoteDollar(pesosInExchange);
            alert("Con $" + pesosInExchange + " podes comprar U$S" + dollar);
            quoteType = prompt("***** COTIZADOR *****\n1-Cambiar pesos a dolares\n2-Cambiar dolares a pesos\n3-Para salir ingrese 0");
        }else if(quoteType === "2"){
            let dollarInExchange = parseFloat(prompt("Ingresa la cantidad de dolares"));
            let pesos = quotePesos(dollarInExchange);
            alert("Con U$S" + dollarInExchange + " podes comprar $" + pesos);
            quoteType = prompt("***** COTIZADOR *****\n1-Cambiar pesos a dolares\n2-Cambiar dolares a pesos\n3-Para salir ingrese 0");
        } else if(quoteType === "0") {
            alert("Ingresaste 0 para salir, gracias por utilizar este sitio web!")
            break
        } else{
            alert("Error de opcion!");
            quoteType = prompt("***** COTIZADOR *****\n1-Cambiar pesos a dolares\n2-Cambiar dolares a pesos\n3-Para salir ingrese 0");
        }
    }




    /*----------------------------------Ejercicio 2: Tienda----------------------------------*/
    /*
    Declarar un clase Tienda que permita registrar:
    Nombre de la tienda.
    Dirección de la tienda.
    Propietario de la tienda.
    Rubro de la tienda.
    Luego invocar al menos tres (3) objetos usando esta clase.
    */

    class Store{
        constructor(nombre,direccion,propietario,rubro){
            this.nombre = nombre;
            this.direccion = direccion;
            this.propietario = propietario;
            this.rubro = rubro;
        }
        //resolucion ej 3
        itIsOpen(hour){
            if ((hour >=8 && hour <=12)||(hour >=15 && hour <=19)){
                return true;
            }else if (hour === 0) {
                return hour
            }{
                return false;
            }
        }
    }

    const store1 = new Store("Carrefour","Av Maipu 234","Jorge Hernandez","Alimentos");
    const store2 = new Store("Dia","Julio A. Roca 1200","Pablo Aguilar","Alimentos");
    const store3 = new Store("Coto","Av. San Martin 4501","Alfred Coto","Alimentos");





    /*----------------------------------Ejercicio 3: Abierto/Cerrado----------------------------------*/
    /* 
    En base al ejercicio anterior: Declarar un método para la clase Tienda con la siguiente cabecera 
    estaAbierto(hora). Este retorna true si la hora enviada está entre las 08 y 12, o entre las 15 y 19. 
    Caso contrario, se retorna false.
    Luego invocar al menos un (1) objeto usando esta clase, y solicitar al usuario tres (3) horas. 
    Informar por alerta si la tienda está abierta, en función de la hora ingresada.
    */


    let hour = 10

    for (let i=1; i<=hour; i++){
        let hour = parseInt(prompt("Ingresa el horario en el que iras a la tienda"));
        let selectStore = prompt(String("Ingresa entre las siguientes tiendas, cual deseas saber si esta abierta\n1-Carrefour\n2-Dia\n3-Coto"));
        let storeStatus = store1.itIsOpen(hour);
        if (storeStatus === true) {
            alert(`${selectStore} esta abierto, te esperamos!`);
        }else if (storeStatus === 0) {
            alert("A seleccionado la opcion para salir. muchas gracias por utilizar este sitio web")
            break
        }else{
            alert(`${selectStore} esta cerrado !`);
        }
    }
```





## Array
``` JavaScript
    // Array
    /*--------------Remove---------------*/


    const listaOfProduct = [
        "mate",
        "termo",
        "yerba",
        "bombilla",
        "agua"
    ]



    const remove = (nombre) => {
        // busco su indice en el array
        let newlist = listaOfProduct.indexOf(nombre)
        // si existe, o sea es distinto a -1 lo borro con splice
        if (newlist !== -1) {
            listaOfProduct.splice(newlist, 1);
            alert(`Se elimino a ${listaOfProduct[newlist]}\nEl nuevo array contiene los siguientes productos: ${listaOfProduct}`);
        }
    }

    const dataDelete = prompt("mate, termo, yerba, bombilla, agua\n Ingrese el producto que desea eliminar.");
    remove(dataDelete);





    /*--------------search---------------*/

    const search = (product) => {
        let selectedProduct = listaOfProduct.indexOf(product);
        if (selectedProduct !== -1) {
            alert(`El producto que buscaste es: ${listaOfProduct[selectedProduct]}`);
        } else {
            alert(`El producto ${product}, no se encuentra en la lista.`);
        }
    } 

    const searchProduct = prompt("Que desea buscar");
    search(searchProduct)



// Para agregar un producto al objeto.
arrayProduct.push(
    {
        id:76,
        nombre:"macdonals",
        detalle:"burger",
        precio:789
    }
);
//for...of recorre todo el array de objetos
for(const producto of productos){
    console.log(producto.nombre+" Precio $:"+producto.precio);
}



/*-----------------------------------*/

//Diapo ejemplo
class ProductMatero {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}
//Declaramos un array de productos para almacenar objetos
const productMatero = [];


function condicional() {
    for (let i = 1; i <= intentos; i++) {
        // Data entry field 
        const addData1 = prompt("ingrese el nombre del producto")
        const addData2 = prompt("ingrese el id del producto")

        if (addData1 === ProductMatero.nombre && addData2 === ProductMatero.precio) {
            productMatero.push(new ProductMatero(addData1, addData2));
            break
        } 
    }
}


//Iteramos el array con for...of para modificarlos a todos
for (const product of productMatero){
    product.sumaIva();
}

```