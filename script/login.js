

// Saved data
class Product {
    constructor(brand, material, price, id, thumbnailUrl ) {
        this.brand = brand
        this.material = material
        this.price = price
        this.id = id
        this.thumbnailUrl = thumbnailUrl
    }
}

const termo = new Product('Termo Stanley ', 'aluminio', 4000, 1,  'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/450/256/products/termo-verde-nuevo-frente1-9ebc319aca02038ab116166160261528-640-0.jpg' )

const bombilla = new Product('Bombilla Campero', 'aluminio', 2000, 2, 'https://http2.mlstatic.com/D_NQ_NP_794871-MLA48950371330_012022-O.webp' )

const mochilaMatera = new Product('Mochila Matera Enerfit ', 'lona', 1000, 3, 'https://http2.mlstatic.com/D_NQ_NP_999412-MLA49655019392_042022-O.webp' )

const mate = new Product('Mate pampero ', 'madera', 1000, 4, 'https://http2.mlstatic.com/D_NQ_NP_929154-MLA48771796965_012022-O.webp' )

const yerba = new Product('Yerba aguantadora ', 'En paquete', 1000, 5, 'https://yerbamateargentina.org.ar/imagenes/archivos/productos/21331_imagen_812x812xrecortarxagrandar.jpg?random=1616970886' )

const taza = new Product('Taza para cafe ', 'ceramica', 1000, 6, 'https://www.hola.com/imagenes/seleccion/20200918175443/tazas-bonitas-practicas-oficina/0-866-303/tazas-blanco-negro-oficina-a.jpg' )

// Declaraciones

const arrayProduct = [
    brand,
    material,
    price,
    id,
    thumbnailUrl
]


function accesToProduct(product) {
    let selectedProduct = product.filter(id)
    return selectedProduct
}
const productSelectedForTheUser = promt("Ingrese el numero de id");

// switch (productSelectedForTheUser) {
//     case 1:
//         const returnProduct = ofevolutionOfProduct(accesToProduct(productSelectedForTheUser.price))
//         alert(returnProduct)
//         break;
//     case 2:
        
//         break;
//     case 3:
        
//         break;
//     case 4:
        
//         break;
//     case 5:
        
//         break;
//     case 6:
        
//         break;
//     case 7:
        
//         break;

//     default:
//         break;
// }


// Data entry field 



// Se debe entregar
/*
    Estructura HTML del proyecto. 
    Variables de JS necesarias. 
    Funciones esenciales del proceso a simular.
    Objetos de JS.
    Arrays.
    Métodos de búsqueda y filtrado sobre el Array.
*/
