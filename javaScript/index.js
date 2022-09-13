console.log("holamundo");
function alerta(){
    alert("me dieron click");
    var caja='<div class="caja">caja3</div>';
    var añadircaja = document.getElementsByClassName("padre");
    añadircaja.innerHTML=caja;
}
// var conteocajas = 0;
// agregarcaja = function () {
//     console.log("hoa");
//     var i = document.createElement('div');
//     //i.setcontent("caja "+ ++conteocajas);
//     i.setAttribute("class", "caja");
//     var añadircaja = document.getElementById("padre");
//     añadircaja.appendChild(i);
// }