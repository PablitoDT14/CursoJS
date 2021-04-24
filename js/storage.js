const productos = [
    {
        'id': 1,
        'nombre': 'Alfajor',
        'stock': true,
        'precio': 50
    },
    {
        'id': 2,
        'nombre': 'Chocolate',
        'stock': false,
        'precio': 80
    },
    {
        'id': 3,
        'nombre': 'Coca',
        'stock': true,
        'precio': 75
    },
    {
        'id': 4,
        'nombre': 'Papas Fritas',
        'stock': false,
        'precio': 50
    },
    {   
        'id': 5,
        'nombre': 'Caramelos',
        'stock': true,
        'precio': 15
    }
    ]

    const productosList = document.getElementById('productos');
    const carritoList = document.getElementById('carrito-list');
    const carrito =[];
    const productosEnStock = productos.filter(producto => producto.stock)
    
    for (let i=0; i<productosEnStock.length;i++){
        const itemProducto = document.createElement('li');
        itemProducto.textContent = `${productosEnStock[i].nombre} / Precio: $ ${productosEnStock[i].precio}`
        itemProducto.setAttribute('id', productosEnStock[i].id)
        productosList.appendChild(itemProducto)

        let currentItem = document.getElementById( productosEnStock[i].id)
        currentItem.onclick =() =>{
            console.log(productosEnStock[i])
            alert('Producto agregado')
            carrito.push(productosEnStock[i])
            localStorage.setItem('carrito', JSON.stringify(carrito))
        }
    }
    console.log(productos)

    let storageList = JSON.parse(localStorage.getItem('carrito'))
    for (let i=0; i<storageList.length;i++){
        const itemCarrito = document.createElement('li');
        itemCarrito.textContent = `${storageList[i].nombre} / Precio: $ ${storageList[i].precio}`
        itemCarrito.setAttribute('id', `carrito-${storageList[i].id}`)
        carritoList.appendChild(itemCarrito)

        let currentItem = document.getElementById( storageList[i].id)

    }