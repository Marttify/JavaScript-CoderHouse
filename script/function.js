
// (array) To save products from the cart.
let cart;
cart = JSON.parse(localStorage.getItem('Cart')) || []; // (Uso de operadores)

let cartTotal;
cartTotal = JSON.parse(localStorage.getItem('TotalPrice')) || 0;

if (cart.length != 0) {
    
    cart.reduce((allProducttSelecte, card) => {
        return [...allProducttSelecte, ...card];
    },[])
    
    printProductCart(cart);

    // for (const product of cart) {
    //     totalPrice()
    // }
    console.log("Recuperando carro" + cart);

}


// Selecte

const alltotal = document.getElementById("total-carrito");
const alltotal2 = document.getElementById("total-carrito2");

const container = document.getElementById("cartContainer");
const containerNameProduct = document.getElementById("nameProduct");
const containerNavProduct = document.getElementById("navProduct");
const containerAcordionExample = document.getElementById("accordionExample")
const containerAdvertisingCard = document.getElementById("advertisingCard")
const containerPrintCarousel = document.getElementById("carouselExampleDark")
const containerPrintCardPrimary = document.getElementById("cardPrimary")

    
// Discount day
const discountDay = true // false (Print without discount(cart/screen))



/************** Render the function to the screen. **************/
function renderPorduct() {

    // To print the cards on the screen 
    for (const product of allProductt) {

        container.innerHTML += `

            <div class=" col card-group card col-sm-2">

                <img src=${product.img} class="card-img-top" alt="...">

                <div class="card-body">

                    <h5 class="card-title">Stock: ${product.stock}</h5>
                    <p class="card-text">${product.name}</p>
                    <p class="card-text text-muted">$<s>${product.price}</s></p>
                    <p class="card-text">${product.discount()}</p>
                    <button id="btn${product.id}" class="btn btn-outline-success">Comprar</button>

                </div>
            </div>

        `;

    }

    //Event
    allProductt.forEach(product => {

        //Event for button
        document.getElementById(`btn${product.id}`).addEventListener("click", function () {

            addToCart(product);
            totalPrice();

        });

    })
}

renderPorduct();

/************** Add the pagination product to the home. **************/
function paginationProduct() {
    containerNavProduct.innerHTML = `
        <ul class="pagination">
            <li class="page-item disabled">
                <a class="page-link text-success" href="#" tabindex="-1" aria-disabled="true">Previous</a>
            </li>
            <li class="page-item active" aria-current="page"><a class="page-link bg-success text-white" href="#">1</a></li>
            <li class="page-item"><a class="page-link text-success" href="#">2 </a></li>
            <li class="page-item"><a class="page-link text-success" href="#">3</a></li>
            <li class="page-item"><a class="page-link text-success" href="#">4</a></li>
            <li class="page-item"><a class="page-link text-success" href="#">5</a></li>
            <li class="page-item">
                <a class="page-link text-success" href="#">Next</a>
            </li>
        </ul>
    `
}

paginationProduct()


/************** Add the acordion example to the home. **************/
function cardPrimary() {
    containerPrintCardPrimary.innerHTML = `
        <div class="card-header">
            Featured
        </div>
        <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-success">Go somewhere</a>
        </div>
        <div class="card-footer text-muted">
            2 days ago
        </div>
    `
}

cardPrimary()

/************** Add the selected product to the cart. **************/
function addToCart(print) {

    // Add library)
    Swal.fire({

        title: `${print.name}!`,
        text: `Se agrego al carrito!`,
        imageUrl: `${print.img}`,
        imageWidth: '50%',
        imageHeight: 'auto',
        imageAlt: `${print.name}`,
        backdrop: 'dark',

    });

    cart.push(print)
    localStorage.setItem('Cart', JSON.stringify(cart))

    // Print the card in the cart.
    printProductCart(print);
}

function printProductCart(buyProduct) {

    document.getElementById("containerCart").innerHTML += `

        <div class="cart__To--The-Product mt-5 mb-5">

            <div class="cart-Items d-flex flex-row justify-content-around text-center align-items-center">

                <img class="w-25" src="${buyProduct.img}" alt="producto">
                
                <div class="sectionCart__header d-flex flex-column justify-content-between m-auto">

                    <h3 class="cart__Nombre">
                        ${buyProduct.name}
                    </h3>

                    <span class="cart__Precio">
                        $${buyProduct.discountPrice()}
                    </span>

                </div>

                <div class=" d-flex flex-row">

                    <div class="btn minus">-</div>
                    <span class="cuenta-carrito h-25 w-25">0</span>
                    <div class="btn plus">+</div>

                </div>

            </div>
        </div>
    `;
}

/************** Add the total price to the cart and print is value. **************/
function totalPrice() {

    // (Conditional) To know if there is a discount or not.
    if (discountDay === true ) {
        
        const acumulator = (acum, producto) => acum + producto.discountPrice();
        cartTotal = cart.reduce(acumulator, 0);
        localStorage.setItem('TotalPrice', cartTotal);

    } else {

        // price 
        const acumulator = (accumulator, producto) => accumulator + producto.price;
        cartTotal = cart.length > 0 ? cart.reduce(acumulator) : 0;
        
        localStorage.setItem('TotalPrice', cartTotal)

    }

    // print the total price in the navbar.
    alltotal.innerText = `Total: $${cartTotal}`;

    // print the total price in the cart.
    alltotal2.innerText = cartTotal;
    
}

function deleteCart() {

    const dataContainerCart = document.getElementById("containerCart");

    if (dataContainerCart.innerHTML !== '') {

        Swal.fire({

            title: 'Estas seguro?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminarlo!'

        }).then((result) => {

            if (result.isConfirmed) {

                Swal.fire(
                    'Eliminado!',
                    'Su archivo ha sido eliminado',
                    'success'
                )

                dataContainerCart.innerHTML = '';
                cart = []
                cartTotal = 0
                localStorage.removeItem('Cart')
                localStorage.removeItem('TotalPrice')
                // print the total price in the navbar.
                alltotal.innerText = `Total: $ `;

                // print the total price in the cart.
                alltotal2.innerText = " ";
            }
        })

    } else {

        Swal.fire({

            title: 'Error',
            text: "No hay productos en el carrito!",
            icon: 'error',

        })
    }
}

//Event for button
const eventDelete = document.getElementById('deleteCart').addEventListener("click", deleteCart);






/*****



    Consigna de la tercera entrega del proyecto final!!

    ## Optimizarás tu proyecto final a través de la puesta en práctica de lo visto en esta clase según sea conveniente en cada caso.
    Aspectos a incluir

    ## Operador Ternario / AND / OR. Busca estructuras condicionales simples en tu proyecto y simplifícalas utilizando operador ternario u operadores lógicos AND y OR.
    Optimización. Con lo visto en clase, optimiza la asignación condicional de variables.
    Desestructuración. Aplica la desestructuración según corresponda para recuperar propiedades de objetos con claridad y rapidez.
    Spread. Usa el operador spread para replicar objetos o arrays o, también, para mejorar la lógica de tus funciones.


*****/
