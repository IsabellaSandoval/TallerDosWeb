var movimientoPromo = setInterval(cambiarPromo, 800);

var promo = ["/imagenes/promo.png", "imagenes/promoo.png", "imagenes/promooo.png"];

var i = 1;

function cambiarPromo() {
    var ima = document.querySelector(".promo");

    switch (i) {
        case 0:
            i++;
            ima.style.backgroundImage = "url(" + promo[0] + ")";
            break;

        case 1:
            ima.style.backgroundImage = "url(" + promo[1] + ")";
            i++;
            break;

        case 2:
            ima.style.backgroundImage = "url(" + promo[2] + ")";
            i++;
            break;

    }

    if (i > 2) {
        i = 0;
    }
    console.log(i);
}