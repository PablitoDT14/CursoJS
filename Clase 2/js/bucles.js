console.log('Hola mundo desde ciclos');
/*

let frutas = ['manzana','banana','naranja','papaya'];

// Ciclo For
for (let i=0; i<frutas.length; i++){
    console.log(frutas[i]);
}
 
for (let i=1; i<=10; i++){
    if(i===5){
        continue;
    }
    console.log(i);
    
}
*/

//WHILE
/*
let entrada = prompt("Ingresar un dato");
while(entrada !== "ESC"){
    alert("El usuario ingresó "+entrada);
    entrada = prompt("Ingresar otro dato");
}

let frutas = ['manzana','banana','naranja','papaya'];
let posicionFruta = 0;
let cantidadElementosEnArray = frutas.length;

while(posicionFruta<cantidadElementosEnArray){
    console.log(frutas[posicionFruta]);
    posicionFruta++;
}
*/
//SWITCH

let signo = prompt('De qué signo sos?');
signo=signo.toLowerCase();
switch(signo){
    case 'tauro': 
        console.log('horóscopo tauro');
        break;
    case 'cancer':
        console.log('a vos no te lo leo');
        break;
    default:
        console.log('Eso no es un signo que leamos');
        break;
}