

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
        alert(`Se elimino a ${nombre}\nEl nuevo array contiene los siguientes productos: ${listaOfProduct}`);
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
