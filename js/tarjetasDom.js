//Inicializo el array de objetos de tipo tarjeta
const tarjetas = [];
alert('Bienvenido a la terminal de carga de tarjetas para el sistema de ventas.');
let option;
let salida=false;


// Clase Tarjeta
class Tarjeta {
    constructor (tipoTarjeta, recargo, cuotas){
        this.cuotas=cuotas;
        this.recargo=recargo;
        this.tipoTarjeta = tipoTarjeta;
    }
}

//Función para la carga de una tarjeta
function cargarTarjeta(){
    const tarjeta = new Tarjeta; 
    tarjeta.tipoTarjeta = (prompt('Ingresá la tarjeta que querés registrar'));
        
    do{
    tarjeta.cuotas = parseInt(prompt('¿A partir de qué cuota tiene recargo?'));
    }while((tarjeta.cuotas<0)||(tarjeta.cuotas>12))
        
    do{
    tarjeta.recargo = parseInt(prompt('Ingresá el porcentaje de recargo (solo números)'));
    }while((tarjeta.recargo<0)||(tarjeta.recargo>100))
        
    tarjetas.push(tarjeta);
}

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

//Función para listar las tarjetas
function verTarjetas(){
    tarjetas.forEach(tc => {
        alert(`Listado de tarjetas: 
    ${tc.tipoTarjeta} tiene un interés del ${tc.recargo}% en la compra en ${tc.cuotas} cuotas o más `)
    });
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

function selector(){
    do{
        option = parseInt(prompt('Menu Principal\n 1-Carga de tarjetas \n 2-Ver tarjetas cargadas \n 3-Buscar una tarjeta en particular \n 4-Modificar una tarjeta \n 5-Borrar una tarjeta \n 6-Salir'));
    } while((option<1)||(option>6))
    return option;
}

function salir(){
    alert('Salida exitosa')
    return salida=true;
}

function menuPrincipal(){
    selector();
    switch(option){
        case 1:
            cargarTarjeta();
            break;
        case 2:
            verTarjetas();
            break;
        case 3:
            buscarTarjeta();
            break;
        case 4:
            modificarTarjeta();
            break;
        case 5:
            eliminarTarjeta();
            break;
        case 6:
            salida= salir();
            break;
        default:
            break;
    }
}

while (!salida){
menuPrincipal();
}

