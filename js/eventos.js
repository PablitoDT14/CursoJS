// OPCION 1

const btn = document.getElementById('btn0')

const clickOnButton = (event) =>{
    console.log(event)
}

btn0.addEventListener('click', (event) => {
    console.log(event.screenX)
    console.log(event.screenY)
})

btn1.addEventListener('click', clickOnButton)
btn2.addEventListener('click', clickOnButton)




// OPCIÓN 2
const btn3 = document.getElementById('btn3')
btn3.onclick=()=>{
    console.log('Click 3')
}

//OPCIÓN 3
// Ver HTML

// OTROS EVENTOS
const btn5 = document.getElementById('btn5');

//Mouse
btn5.onmousemove = () => {
    console.log('Move!!!')
}

btn5.onmouseleave = () => {
    console.log('Se fue!!!')
    btn5.className = 'btn-rojo'
}

btn5.onmouseover = () => {
    console.log('Foco!!!')
    btn5.className = 'btn-verde'
}

//Teclado

const input = document.getElementById('input')

input.onkeyup =()=>{
   // console.log('Levantaste el dedo')
    console.log(input.value)
}

input.onkeydown =()=>{
    console.log('Apretaste el dedo')
}

input.onfocus =()=>{
    console.log('Estás en el input')
}

input.onchange =() =>{
    console.log('Cambia')
}

const form = document.getElementById('form')
const inputName = document.getElementById('inputName')
const checkbox = document.getElementById('check-box')

let arepas = false

checkbox.onchange=()=>{
    arepas = !arepas;
    console.log(`Le gustan las arepas ? : ${arepas}`)
}


form.addEventListener ('submit', (event)=>{
 event.preventDefault()
 console.log(event.target)
})
