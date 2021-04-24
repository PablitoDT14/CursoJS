let carrito = [
{
    'nombre': 'Alfajor',
    'stock': true,
    'precio': 50
},
{
    'nombre': 'Chocolate',
    'stock': true,
    'precio': 80
},
{
    'nombre': 'Coca',
    'stock': false,
    'precio': 90
},
{
    'nombre': 'Papas Fritas',
    'stock': true,
    'precio': 75
}
]

console.log(carrito);

//map sirve para iterar y mapear por algun criterio y devuelve un nuevo array

const productosCarrito = carrito.map((producto)=> {
    return producto.nombre.toUpperCase();
})
console.log(productosCarrito)


const productosStock = carrito.filter(producto=> producto.stock)
console.log(productosStock)


const total = carrito.reduce((subtotal, producto) => subtotal+producto.precio,0)
console.log(total)

const totalPosta = carrito.filter(producto =>producto.stock).reduce((subtotal, producto) => subtotal+producto.precio,0)
console.log(totalPosta)