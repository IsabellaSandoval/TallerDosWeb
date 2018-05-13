/* Valor del rango desde*/

var sliderDesde = document.getElementById("desde");

var outputDesde = document.getElementById("desdeValor");
outputDesde.innerHTML = sliderDesde.value;

sliderDesde.oninput = function () {
    a = this.value;
    outputDesde.innerHTML = a;
}


/* Valor del rango hasta*/
var sliderHasta = document.getElementById("hasta");
var outputHasta = document.getElementById("hastaValor");
outputHasta.innerHTML = sliderHasta.value;

sliderHasta.oninput = function () { 
a = this.value;
    outputHasta.innerHTML = a;
}

var boton = document.querySelector(".filtroRango");
var borrar = document.querySelector(".borrarFiltros");
console.log(boton);
boton.addEventListener("click", function(e){
    e.preventDefault;
    location.href ="/genetica/terneras/?min="+sliderDesde.value + "&max=" + sliderHasta.value;
    console.log("Hola");
});

borrar.addEventListener("click",function(e){
    e.preventDefault;
    location.href="/genetica/terneras";
});