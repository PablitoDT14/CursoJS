//If - if else
let i=true;

if (i){
    console.log('Hola')
} 
else{
    console.log('Chau')
}


//Bucles While - Do While - For
let num = 0;

while (num < 3) {
    console.log(num)
    num++;
}

//Control Switch


//Funciones
//Flecha o anónimas
const suma=(a,b) => {return a+b};
console.log(suma(2,3))


//Función constructora
function PersonaFn (nombre, edad, calle){
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
}

//Clase
class PersonaCl{
    constructor(nombre, edad, calle){
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
    }
}

const persona1 = new PersonaFn('Pablo',36,'Calle 111');
const persona2 = new PersonaCl('Juan',9,'Calle 9')

console.log(persona1)
console.log(persona2)



//Arrays - Listas de cosas
const nombres = ["Ana", "Ema", "Juan", "Elia"]
const lenghts = nombres.map(nombres => lenghts)