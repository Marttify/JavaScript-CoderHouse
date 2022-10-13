

const containerCard = document.querySelectorAll('.card');

function renderCardProduct(product) {
    let card = document.createElement('div');
    card.className('card');
    card.innerHTML`
        <picture class="cardPicture">
            <img src="assets/image/WhatsApp Image 2022-10-03 at 8.51.58 AM.jpeg" alt="Jarron" srcset="">
        </picture>
        <div class="cardInfo">
            <p class="cardInfoDescription">Jarron copa 80 cs venecitas exotico decoracion moderno living...</p>
            <h2 class="cardInfoPrecio">$4.030</h2>
            <p class="cardInfoEnvio">Envio gratis en la localidad</p>
        </div>
    `
}