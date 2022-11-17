
// Class constructora and method

class Product{
    constructor(name,id,price,img,stock){
        this.name = name.toUpperCase();
        this.id = Number(id);
        this.price = parseFloat(price);
        this.img = img;
        this.stock = Number(stock)
    }
    // method vat
    vatSum(){
        this.price = this.price * 1.21;
    }
    // method discount
    discount() {
        if (discountDay === true) {
            const discount = (this.price * 15) / 100;
            const discount2 = this.price - discount;
            return  `Discount: $${discount2}`
        } else {
            return this.discount = ''
        }
    }
    // Price discount method
    discountPrice() {
        // Validate discount day
        if (discountDay === true) {
            const discount = (this.price * 15) / 100;
            const discount2 = this.price - discount;
            return  discount2
        } else {
            return this.discount = ''
        }
    }
}
