
// (array) To save products from the cart.
const cart = [];

// variable global
// let cartTotal;

// Selecte
const container = document.getElementById("cartContainer");
const containerNameProduct = document.getElementById("nameProduct");
const containerNavProduct = document.getElementById("navProduct");
const containerAcordionExample = document.getElementById("accordionExample")
const containerAdvertisingCard = document.getElementById("advertisingCard")
const containerPrintCarousel = document.getElementById("carouselExampleDark")
const containerPrintCardPrimary = document.getElementById("cardPrimary")


// Discount day
const discountDay = true // false (Print without discount(cart/screen))



// Storage 
let storageCart = localStorage.getItem('Cart')
let StorageTotalPrice = localStorage.getItem('TotalPrice')




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
            // getStorage()
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

/************** Add the advertising card to the home. **************/
function advertisingCard() {
    containerAdvertisingCard.innerHTML = `
        <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
            <div class="card-header">Header</div>
            <div class="card-body">
                <h5 class="card-title">Success card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
            <div class="card-header">Header</div>
            <div class="card-body">
                <h5 class="card-title">Success card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
            <div class="card-header">Header</div>
            <div class="card-body">
                <h5 class="card-title">Success card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    `
}
advertisingCard()

/************** Add the acordion example to the home. **************/
function printCarousel() {
    containerPrintCarousel.innerHTML = `
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner carouselHeigth">
            <div class="carousel-item active" data-bs-interval="10000">
                <img src="assets/image/bienvenidos.jpeg" class="d-block w-50 m-auto h-100 " alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
                <img src="assets/image/saumerio.jpeg" class="d-block w-50 m-auto h-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="assets/image/s.jpeg" class="d-block w-50 m-auto h-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    `
}
printCarousel()
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
/************** Add the acordion example to the home. **************/
function AcordionExample() {
    containerAcordionExample.innerHTML = `
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
            </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed text-dark" type="button " data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
            </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
            </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body ">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
            </div>
        </div>
    `
}
AcordionExample()

/************** Add the selected product to the cart. **************/
function addToCart(buyProduct) {
    // Add alert information to the user for their purchase(for replace library)
    alert(` ${buyProduct.name} se agregado al carrito!`);
    cart.push(buyProduct)
    localStorage.setItem('Cart', JSON.stringify(cart))
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
        // price discount
        const acumulator = (acum, producto) => acum + producto.discountPrice();
        cartTotal = cart.reduce(acumulator, 0);
        localStorage.setItem('TotalPrice', cartTotal) 
    } else {
        // price 
        const acumulator = (accumulator, producto) => accumulator + producto.price
        cartTotal = cart.length > 0 ? cart.reduce(acumulator) : 0;
        localStorage.setItem('TotalPrice', cartTotal)
    }
    
    // print the total price in the navbar.
    let alltotal = document.getElementById("total-carrito");
    alltotal.innerText = `Total: $${cartTotal}`;

    // print the total price in the cart.
    let alltotal2 = document.getElementById("total-carrito2");
    alltotal2.innerText = cartTotal;
}

function getStorage(cartStorage, price) {
    if (cartStorage !== null && price !== 0) {
        cartTotal = price
        cart = []
    } else {
        for (const product of cart) {
            cartTotal = JSON.parse(price)
            cart = JSON.parse(cartStorage)
            totalPrice()
            addToCart(product)
        }
    }
}






// Call Function:
getStorage(storageCart, StorageTotalPrice)




/*****



    Consigna de la tercera entrega del proyecto final!!

    ## Optimizarás tu proyecto final a través de la puesta en práctica de lo visto en esta clase según sea conveniente en cada caso.
    Aspectos a incluir

    ## Operador Ternario / AND / OR. Busca estructuras condicionales simples en tu proyecto y simplifícalas utilizando operador ternario u operadores lógicos AND y OR.
    Optimización. Con lo visto en clase, optimiza la asignación condicional de variables.
    Desestructuración. Aplica la desestructuración según corresponda para recuperar propiedades de objetos con claridad y rapidez.
    Spread. Usa el operador spread para replicar objetos o arrays o, también, para mejorar la lógica de tus funciones.


*****/
