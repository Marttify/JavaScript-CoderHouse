



// Data entry field 

const priceInput = parseInt(prompt("Ingrese el precio"))
const discountInput = parseInt(prompt("De cuanto es el descuento"))


//Function

function calculateDiscountedPrice(price, discount) {
    const discountedPricePercentage = 100 - discount;
    const discountedPrice = (price * discountedPricePercentage) / 100;
    return discountedPrice;
}
function conditional(disconut) {
    if (disconut !== 0) {
        const mensaje = alert(`El precio con descuento es de: $${disconut}`);
        return mensaje
    } else {
        const mensaje = alert("Por favor ingrese los datos para calcular el discounted!");
        return mensaje
    }
}
function calculos(){
    const discountedPrice1 = calculateDiscountedPrice(priceInput, discountInput);
    const priceOrDiscount = conditional(discountedPrice1)
    return priceOrDiscount
}


calculos()
