let color='verde';
localStorage.setItem('Color',color);
localStorage.setItem('verde',color);
localStorage.removeItem('verde');

console.log(localStorage.getItem('Color'));

localStorage.clear();
sessionStorage.setItem('Color',color);
