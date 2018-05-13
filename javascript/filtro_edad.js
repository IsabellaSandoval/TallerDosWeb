/* Valor del rango desde*/

var sliderDesde_edad = document.getElementById("desde_edad");

var outputDesde_edad = document.getElementById("desdeValor_edad");
outputDesde_edad.innerHTML = sliderDesde_edad.value;

sliderDesde_edad.oninput = function () {
    a = this.value;
    outputDesde_edad.innerHTML = a;
}


/* Valor del rango hasta*/
var sliderHasta_edad = document.getElementById("hasta_edad");
var outputHasta_edad = document.getElementById("hastaValor_edad");
outputHasta_edad.innerHTML = sliderHasta_edad.value;

sliderHasta_edad.oninput = function () { 
a = this.value;
    outputHasta_edad.innerHTML = a;
}

var boton_edad = document.querySelector(".filtroRango_edad");
var borrar_edad = document.querySelector(".borrarFiltros_edad");
console.log(boton);
boton_edad.addEventListener("click", function(e){
    e.preventDefault;
    location.href ="/genetica/terneras/?min_ed="+sliderDesde_edad.value + "&max_ed=" + sliderHasta_edad.value;
    console.log("Hola");
});

borrar_edad.addEventListener("click",function(e){
    e.preventDefault;
    location.href="/genetica/terneras";
});