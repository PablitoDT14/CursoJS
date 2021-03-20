let userName = prompt('Ingresá tu nombre');
let age = parseInt(prompt('Ingresá tu edad'));
let date = new Date();
let year = date.getFullYear();
let birth = year - age;
let response = confirm ('Bienvenido '+userName + '. Has nacido en el año '+birth+ '. Es correcto?');
if (response === true){
    alert('Excelente! Procederemos a analizar tu registro.');
}
else{
    birth -=1;
    alert('Entonces has nacido en el año '+birth+'.');
}

if(age>=18){
    alert('Registro exitoso, eres mayor de edad.');
}
else{
    alert('Debes solicitar a tus padres la inscripción.')
}

