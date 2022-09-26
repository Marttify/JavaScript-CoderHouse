
// Arrays



// Query selector
const priceInput = document.getElementById('inputPrice');
const resultTrue = document.getElementById('printDescount');
const discountInput = document.getElementById('inputDiscount');
const result1False = document.getElementById('colorDescount');


//Function
function burden(e) {
    if (document.body.innerHTML == "") {
        // Si la pagina esta cargando mostrar el leading
    }
}

function calculateDiscountedPrice(price, discount) {

    const discountedPricePercentage = 100 - discount;
    const discountedPrice = (price * discountedPricePercentage) / 100;
    
    return discountedPrice;
}
function calculos() {
    const priceValue = priceInput.value;
    const discountValue = discountInput.value;
    const discountedPrice = calculateDiscountedPrice(priceValue, discountValue);
    
    if (discountedPrice !== 0) {
        resultTrue.innerText = `El precio con descuento es de:\n$${discountedPrice}`;
        result1False.innerText = " ";
    } else {
        result1False.innerText = "Por favor ingrese los datos para calcular el discounted!";
        resultTrue.innerText = " ";
    }
}


