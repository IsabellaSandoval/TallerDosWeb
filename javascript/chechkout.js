console.log(arreglo);

fetch('http://localhost:5000/productosPorIds?id=' + arreglo)
    .then(function (res) {
        return res.json();
    })
    .then(function (res) {
        console.log(res);
        console.log(arreglo);
        /* var lista = document.querySelector('.lista');
         res.forEach(function (elem) {
             lista.innerHTML += `<p>`+elem.nombre+`</p>
             <p>`+elem.precio+`</p>
             <p>`+elem.categoria+`</p>
             <p>`+elem.sexo+`</p>
             <p>`+elem.edad+`</p>

             `;
    });*/
});