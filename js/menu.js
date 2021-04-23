alert('Hola mundo!')

const menuPrincipal = document.getElementById("menu-principal");
console.log(menuPrincipal);
const seleccion = document.getElementById("seleccion");
console.log(seleccion)
console.log(seleccion.value)
if (seleccion.value==="load"){
    open(cargaTarjetas.html);
}