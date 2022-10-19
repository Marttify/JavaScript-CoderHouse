
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

/************** New product **************/

const familiaLechusa = new Product('Familia lechusa', 0, 1500, "assets/image/bienvenidos.jpeg", 3);
const portaSaumerio = new Product('Porta Saumerio', 2, 300, "assets/image/saumerio.jpeg", 6);
const jarrones = new Product('Jarrones', 3, 2500, "assets/image/cascadaAromatizada.jpeg", 4);
const catBlack = new Product('Gato negro', 4, 1800, "assets/image/catBlack.jpeg", 1);
const catwhite = new Product('Gato White', 5, 1800, "assets/image/catWhite.jpeg", 2);
const welcomeDogs = new Product('Bienvenida', 6, 950, "assets/image/welcomeDogs.jpeg", 2);
const lechusa = new Product('Lechusa', 7, 1300, "assets/image/lechusa.jpeg", 3);
const s = new Product('Sin nombre', 8, 1530,"assets/image/s.jpeg", 2);


/************** Create array for new product **************/

const allProductt = [
    familiaLechusa,
    portaSaumerio,
    jarrones,
    catBlack,
    catwhite,
    welcomeDogs,
    lechusa,
    s
];