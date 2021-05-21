/*

//Función para la búsqueda de una tarjeta
function buscarTarjeta(){
    const tarj = (prompt('Ingresá la tarjeta'));
    const buscar = tarjetas.find(tarjeta => tarjeta.tipoTarjeta === tarj)
    if (!buscar){
        throw new Error(`No existe ${tarj}`)
    }
    alert(`Tarjeta buscada: 
    ${buscar.tipoTarjeta} tiene un interés del ${buscar.recargo}% en la compra en ${buscar.cuotas} cuotas o más `)
    
}

function buscarPosicion(){
    const tarj = (prompt('Ingresá la tarjeta'));
    const posicion = tarjetas.findIndex(tarjeta => tarjeta.tipoTarjeta === tarj)
    if (posicion<0){
        throw new Error(`No existe ${tarj}`)
    }    
    return posicion
}


//Función para modificar los datos de una tarjeta
function modificarTarjeta(){
    const posicion = buscarPosicion();
    tarjetas.splice(posicion,1);
    cargarTarjeta();
}

//Función para eliminar una tarjeta
function eliminarTarjeta(){
    const posicion = buscarPosicion();
    alert(`Se va a eliminar la tarjeta ${tarjetas[posicion].tipoTarjeta}`)
    tarjetas.splice(posicion,1);
    alert(`Tarjeta eliminada`)
    
}

*/