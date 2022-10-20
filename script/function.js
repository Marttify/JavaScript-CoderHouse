
// (array) To save products from the cart.
const cart = [];

// variable global
let cartTotal;

// Discount day
const discountDay = true // false (Print without discount(cart/screen))

//Selecte
let container = document.getElementById("cartContainer");
let containerNameProduct = document.getElementById("nameProduct");



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
        });
        
    })
}
renderPorduct();



/************** Add the selected product to the cart. **************/
function addToCart(buyProduct) {
    // Add alert information to the user for their purchase(for replace library)
    alert(` ${buyProduct.name} se agregado al carrito!`);
    cart.push(buyProduct)
    totalPrice()
    // Print the card in the cart.
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
    if (discountDay === true) {
        const acumulator = (acum, producto) => acum + producto.discountPrice();
        cartTotal = cart.reduce(acumulator, 0);
        localStorage.setItem('TotalPrice', cartTotal) 
    } else {
        const acumulator = (accumulator, producto) => accumulator + producto.price
        cartTotal = cart.length > 0 ? cart.reduce(acumulator) : 0;
        localStorage.setItem('TotalPrice', cartTotal)
    }
    
    // print the total price in the navbar.
    const alltotal = document.getElementById("total-carrito");
    alltotal.innerText = `Total: $${cartTotal}`;

    // print the total price in the cart.
    const alltotal2 = document.getElementById("total-carrito2");
    alltotal2.innerText = cartTotal;
}


//Storage
const addProductStorage = JSON.stringify(cart);
const stringProduct = localStorage.setItem('Cart', addProductStorage)
console.log(stringProduct);



/*****
    Tareas:
    Reemplazar la funcion de imprimir el carrito, el total,y aplicar el descuento para poder tomar como parametro una variable a la cual le asignaremos los datos del storage.



    Consigna de la tercera entrega del proyecto final!!

    ## Optimizarás tu proyecto final a través de la puesta en práctica de lo visto en esta clase según sea conveniente en cada caso.
    Aspectos a incluir

    ## Operador Ternario / AND / OR. Busca estructuras condicionales simples en tu proyecto y simplifícalas utilizando operador ternario u operadores lógicos AND y OR.
    Optimización. Con lo visto en clase, optimiza la asignación condicional de variables.
    Desestructuración. Aplica la desestructuración según corresponda para recuperar propiedades de objetos con claridad y rapidez.
    Spread. Usa el operador spread para replicar objetos o arrays o, también, para mejorar la lógica de tus funciones.


*****/
