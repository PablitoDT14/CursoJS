class Perro{
    constructor(nombre, raza){
        this.nombre=nombre;
        this.raza=raza;
    }
}

let perritos = JSON.parse(localStorage.getItem('perros'))

if(!perritos){
    perritos=[];
}



const formPerro = document.getElementById('form-perro');
const inputNombre = document.getElementById('input-nombre');
const inputRaza = document.getElementById('input-raza')
const listaPerros = document.getElementById('lista-perros')

formPerro.addEventListener('submit', (event)=> {
    event.preventDefault(); //para evitar que se refresque la página
    const nombre = inputNombre.value;
    const raza = inputRaza.value;
    const perro = new Perro(nombre,raza);
    perritos.push(perro)
    let perritos2= JSON.stringify(perritos)
    localStorage.setItem('perros',perritos2)
    console.log(perritos)


    for(let i=0; i<perritos.length; i++){
        let itemPerro= document.createElement('li')
        itemPerro.textContent = `El nombre del perro es ${perritos[i].nombre} y su raza es ${perritos[i].raza}`
        listaPerros.appendChild(itemPerro);
    }
})