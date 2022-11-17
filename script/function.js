
// Analyze in cart storage.
let cart = JSON.parse(localStorage.getItem('Cart')) || [];


// Selecte
const alltotal = document.getElementById("total-carrito");
const alltotal2 = document.getElementById("total-carrito2");
const container = document.getElementById("cartContainer");
const containerNameProduct = document.getElementById("nameProduct");
const containerNavProduct = document.getElementById("navProduct");
const containerPrintCardPrimary = document.getElementById("cardPrimary");
const dataContainerCart = document.getElementById("containerCart");
let cantProductCart = document.getElementById('cant-product');

/************** Get data from storage. **************/
function addToDataStorage() {

    if (cart !== []) {
    
        for (const product of cart) {
            
            printProductCart(product)

        }

        totalPrice()

    }
}
addToDataStorage()

/************** Get data from JSON. **************/
function baseDatoJson() {
    
    fetch('product.json')
    .then(function (res) {
        return res.json();
    })
    .then(function (data) { 
        renderPorduct(data)
    })
    
}
baseDatoJson()

/************** Render the function to the screen. **************/
function renderPorduct(productAddJson) {

    // To print the cards on the screen 
    for (const product of productAddJson) {

        container.innerHTML += `

            <div class=" col card-group card col-sm-2">

                <img src=${product.img} class="card-img-top" alt="...">

                <div class="card-body">

                    <h5 class="card-title">Stock: ${product.stock}</h5>
                    <p class="card-text">${product.name}</p>
                    <p class="card-text text-muted">$${product.price}</p>
                    <button id="btn${product.id}" class="btn btn-outline-success">Comprar</button>

                </div>
            </div>

        `;

    }

    //Event
    productAddJson.forEach(product => {

        //Event for button
        document.getElementById(`btn${product.id}`).addEventListener("click", function () {
            addToCart(product);
        });

    })
}

// /************** Add the selected product to the cart. **************/
function addToCart(dataProduct) {

    if (cart.length !== 0) {

        if (cart.includes(dataProduct)) {
            
            cart.push(dataProduct)
            localStorage.setItem('Cart', JSON.stringify(cart))
            totalPrice()
            plusCart()

        } else { 

            cart.push(dataProduct)
            localStorage.setItem('Cart', JSON.stringify(cart))
            printProductCart(dataProduct);
            totalPrice()

        }
        
    } else {

        cart.push(dataProduct)
        localStorage.setItem('Cart', JSON.stringify(dataProduct))
        printProductCart(dataProduct)
        totalPrice()

    }

    // Add library)
    Swal.fire({
        
        title: `${dataProduct.name}!`,
        text: `Se agrego al carrito!`,
        imageUrl: `${dataProduct.img}`,
        imageWidth: '50%',
        imageHeight: 'auto',
        imageAlt: `${dataProduct.name}`,
        backdrop: 'dark',

    });

}

// /************** Render to cart product . **************/
function printProductCart(buyProduct) {
        
    document.getElementById("containerCart").innerHTML += `

        <div class="cart__To--The-Product mt-5 mb-5">

            <div id='${buyProduct.id}' class="cart-Items d-flex flex-row justify-content-around text-center align-items-center">

                <img class="w-25" src="${buyProduct.img}" alt="producto">
                
                <div class="sectionCart__header d-flex flex-column justify-content-between m-auto">

                    <h3 class="cart__Nombre">
                        ${buyProduct.name}
                    </h3>
                    <p>$${buyProduct.price}</p>
                </div>

                <div class=" d-flex flex-row">

                    <div class="btn" id='minus${buyProduct.id}' >-</div>
                    <span class="h-25 w-25" id='cant-product${buyProduct.id}'>1</span>
                    <div class="btn" id='plus${buyProduct.id}' >+</div>

                </div>

            </div>
        </div>
    `;

    // get all cart ids
    cart.forEach(product => {
        
        document.getElementById(`minus${product.id}`).addEventListener("click", function () {
            minusCart(product);
        });

        document.getElementById(`plus${product.id}`).addEventListener("click", function () {
            plusCart(product);
        });

    });
}

/************** Add the total price to the cart and print is value. **************/
function totalPrice() {

    let sumaTotal = cart.map(product => product.price);
    let initialValue = 0;
    let resultTotal = sumaTotal.reduce(
    
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue

    );
        
    localStorage.setItem('Total price', resultTotal);
        
    // print the total price in the navbar.
    alltotal.innerText = `Total: $${resultTotal}`;

    // print the total price in the cart.
    alltotal2.innerText = resultTotal;
    
}

/************** Increase cart card.  **************/
function plusCart(prod) {

    let cantProductCart = document.getElementById(`cant-product${prod.id}`);
    let typeDateCant = parseInt(cantProductCart.innerText);

    if (typeDateCant >= 0 && typeDateCant < 10) {

        if (typeDateCant !== 0) {

            cantProductCart.innerText = typeDateCant + 1;
            cart.push(prod);
            totalPrice();
            // Add library)
            Swal.fire({
                
                title: `${prod.name}!`,
                text: `Se agrego al carrito!`,
                imageUrl: `${prod.img}`,
                imageWidth: '50%',
                imageHeight: 'auto',
                imageAlt: `${prod.name}`,
                backdrop: 'dark',

            });

        } else {

            cantProductCart.innerText = 1;
            // Add library)
            Swal.fire({
                
                title: `${prod.name}!`,
                text: `Se agrego al carrito!`,
                imageUrl: `${prod.img}`,
                imageWidth: '50%',
                imageHeight: 'auto',
                imageAlt: `${prod.name}`,
                backdrop: 'dark',

            });

        }

    } else if (typeDateCant === 10) {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No puedes superar la cantidad maxima!',
            footer: '<a href="#">Por que tengo este problema?</a>'
        })
    }
}

/************** decrease cart card. **************/
function minusCart(prod) {

    let cantProductCart = document.getElementById(`cant-product${prod.id}`)
    let typeDateCant = parseInt(cantProductCart.innerText)

    if (typeDateCant !== 0 ) { 

        if (typeDateCant !== 1) {

            cantProductCart.innerText = typeDateCant - 1

            let sumaTotal = cart.map(product => product.price);

            let initialValue = 0;
            let resultTotal = sumaTotal.reduce(
                (previousValue, currentValue) => previousValue + currentValue,
                initialValue
            );
            let restaPrice = resultTotal - prod.price
            
            localStorage.setItem('Total price', restaPrice);
            
            // print the total price in the navbar.
            alltotal.innerText = `Total: $${restaPrice}`;
    
            // print the total price in the cart.
            alltotal2.innerText = restaPrice;

            // Add library)
            Swal.fire({
                
                title: `${prod.name}!`,
                text: `Se elimino del carrito!`,
                imageUrl: `${prod.img}`,
                imageWidth: '50%',
                imageHeight: 'auto',
                imageAlt: `${prod.name}`,
                backdrop: 'dark',

            });

            if (restaPrice === 0) {
                location.reload();
            }

        } else {

            cart.splice(prod) 
            localStorage.setItem('Cart', JSON.stringify(cart));

            document.getElementById(`${prod.id}`).innerHTML = '';

            let totalPriceData = document.getElementById("total-carrito2");
            let cant = parseInt(totalPriceData.innerText);

            let dataCant = cant - prod.price;

            // print the total price in the navbar.
            alltotal.innerText = `Total: $${dataCant}`;
    
            // print the total price in the cart.
            alltotal2.innerText = dataCant;

            // Add library)
            Swal.fire({
                
                title: `${prod.name}!`,
                text: `Se elimino del carrito!`,
                imageUrl: `${prod.img}`,
                imageWidth: '50%',
                imageHeight: 'auto',
                imageAlt: `${prod.name}`,
                backdrop: 'dark',

            });

            if (dataCant === 0) {
                location.reload();
            }
        }

    } 
}

/************** delete to cart **************/
function deleteCart() {

    // const dataContainerCart = document.getElementById("containerCart");

    if (cart.length !== 0) {

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
                
                localStorage.clear();
                
                // print the total price in the cart.
                alltotal.innerText = `Total: $ `;

                // print the total price in the navbar.
                alltotal2.innerText = '';
                location.reload();

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

//Event for button
const eventDelete = document.getElementById('deleteCart').addEventListener("click", deleteCart);