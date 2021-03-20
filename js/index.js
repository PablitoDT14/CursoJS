let userName = prompt('Ingresá tu nombre');
let age = parseInt(prompt('Ingresá tu edad'));
let date = new Date();
let year = date.getFullYear();
let birth = year - age;

alert ('Bienvenido '+userName + '. Has nacido en el año '+birth+ '.');
alert ('En caso de que aún no haya llegado el mes de tu cumpleaños, te pedimos disculpas por la confusión. Lo arreglaremos en breve');
