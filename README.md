# Hola, soy Martin 👋



### Este repositorio consta de utilizar lo aprendido dentro del curso para crear una APLICACION WEB INTERACTIVA
    
#### Proyecto: Crear un simulador a eleccion.

## Sobre el curso
https://drive.google.com/file/d/13HzynwN1yZNb7QKqfNBgXvoo4hJSkyKT/view


## Conceptos generales: sintaxis y variables

```javascript       
    //- Declaraciones.
    var martify 
    //- Inicializar variables.   
    var martify = 0
    //- Asignación.  
    martify = 24
    //- Valores.     
    martify = "String"
    martify = "Number"
    //- Prompt, consola y alert.     
    console.log(martify)
```

## Control de flujos - Glosario
```HTML
 <!--   La idea del control de flujos es marcar puntos en nuestra aplicación donde,
     a partir de alguna evaluación, nuestro programa pueda tomar varios caminos posibles de acción.
     Usar para slides de texto e imagen. Si no alcanza, no sobrecargar,
     usar otra con el mismo título para indicar que continúa el mismo módulo.-->

    - JavaScript
    - Variable
    - Algoritmo
    - Operadores lógicos
    - Anidar
    - Parsear
    - Script
```
## Condicionales en JS

```JavaScript 
    
    // -Estructura SWITCH
    switch (expresión) {
        case valor1:
          [break;]
        case valor2:
          [break;]
        ...
        case valorN:
          [break;]
        default:
          [break;]
    }
    
    
    // -Estructura IF ELSE 
    if (promedio > 0) {
        console.log(`El promedio es de: ${promedio}`);
    } else {
        console.log("Su promedio es cero o no se ingresaron datos!");
    }
```

![Captura de Pantalla 2022-09-23 a la(s) 18 29 28](https://user-images.githubusercontent.com/89709211/192102125-5a793e84-0ad9-4ac6-9bb4-cd767e6dbe73.png)

# Ciclos en JS:

``` JavaScript 
    //- Sentencia break:
    break
    //- Sentencia continue:
    continue
    //- Estructura while:
    while{
    
    }
    //- Declarar función:
    function(){
    
    }
```
## Funciones y propiedades básicas

```text
¿Y qué ventajas me dan las funciones?
    - Las principales ventajas del uso de funciones son:
    - Evita instrucciones duplicadas (Principio DRY).
    - Soluciona un problema complejo usando tareas sencillas (Principio KISS).
    - Focaliza tareas prioritarias para el programa (Principio YAGNI).
    - Aporta ordenamiento y entendimiento al código.
    - Aporta facilidad y rapidez para hacer modificaciones.

    # parámetros
    # Scope
    # Variables globales
    # Variables locales
    # Funciones anónimas
    # Funciones flecha


```

# Ciclos/bucles

## Tipos de bucles

    - CICLOS POR CONTEO
        Repiten un bloque de código un número de veces específica. Estructura for. 

    - CICLOS CONDICIONALES
        Repiten un bloque de código mientras la condición evaluada es verdadera. Estructuras while y do...while.


## Estructura FOR
```JavaScript
    for (desde; hasta; Actualizacion){
        // Lo que este dentro de este for se ejecutara tantas veces este indicado el ciclo
    }

    // ejemplo:
    for (let i=1;i<=5;i++){
        alert(i)
        // ejemplo break
        if(i==4){
            break; //Sentencia break
        }
        alert(i)
        // ejemplo continue
        if(i == 2){
            continue; //Sentencia continue
        }
        alert(i)
    }

```
## Estructura While/ do_While
```JavaScript
    while (condition) {
        // Si la condicion se cumple se ejecuta el codigo
    }

    // DO… WHILE
    do{
        // Se repite el codigo dentro hasta que la condicion se cumpla
    }while(condition)

```
## Funciones de orden superior
``` JavaScript
    // es aquella que retorna una función, o recibe una función por parámetro. Este tipo de funciones nos permiten abstraernos sobre acciones y no sólo valores. 

    let mayorQueDiez = (m) => m > 10

    // Ejemplo de arrow function
    
    function asignarOperacion(op) {
        if (op == "sumar") {
            return (a, b) => a + b
        } else if (op == "restar") {
            return (a, b) => a - b
        }
    }

    let suma = asignarOperacion("sumar")
    let resta = asignarOperacion("restar")

    console.log( suma(4, 6) )  //  10
    console.log( resta(5, 3) )  //  2

```

![Captura de Pantalla 2022-10-07 a la(s) 21 08 04](https://user-images.githubusercontent.com/89709211/194677118-70550b15-1041-482c-8947-5bdd4353c7d7.png)

# https://aguilar1998.github.io/PreEntrega1-Aguilar/

¿Cómo lo ejecuto en local?

    git clone https://github.com/Aguilar1998/PreEntrega1-Aguilar.git
    cd PreEntrega-Aguilar1 # ingresar a la carpeta del proyecto
    npm install # instalar las dependencias
    npm run stat # arrancar el proyecto
    npm run dev # levantar el entorno de desarrollo

¿Aceptas Pull Request?

    ¡No por el momento! Lo cierto es que este repositorio forma parte del curso en CoderHouse y hasta ser finalizado no sera posible aceptar Request. 


# Interactividades a incorporar:
```text
 🔹 Renderizar el carrito.
 🔹 Seleccionar el pregudcto para ver sus detalle.
 🔹 Seleccionar el producto y si posee descuento mostrarlo.
 🔹 Modo oscuro.
 🔹 Graficar los productos dentro del carrito.
 🔹 Al ingresar al sitio web se debe mostrar un leading hasta que aparezca el contenido.
```


## Tecnologías utilizadas

- HTML5
- CSS3
- SASS
- Bootstrap 5 
- Font Awezome
- Javascript


