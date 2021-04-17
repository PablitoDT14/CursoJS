/*let color='verde';
localStorage.setItem('Color',color);
localStorage.setItem('verde',color);
localStorage.removeItem('verde');

console.log(localStorage.getItem('Color'));

localStorage.clear();
sessionStorage.setItem('Color',color);
*/

const perro = {
    nombre: 'Chronos',
    edad: 14
}

localStorage.setItem('perro', JSON.stringify(perro))
let perroLS = localStorage.getItem('perro')
console.log(perroLS)
console.log(JSON.parse(perroLS))
