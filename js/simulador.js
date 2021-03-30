/*Constantes para evitar hardcodeo y compartimentar código en funciones*/
const recargoVisa=15;
const cuotasVisa=9;
const recargoMaster=25;
const cuotasMaster=6;
const recargoAmex=35;
const cuotasAmex=1;
const ingresoMonto= 'Ingresá el monto a abonar';
const validacionMonto= 'Debe ingresar un valor numérico superior a cero.';
const montoLimite=9999999;
const ingresoTarjeta= 'Seleccioná la tarjeta de tu preferencia: \n 1-VISA (9 cuotas sin interés) \n 2-Mastercard (6 cuotas sin interés) \n 3-AMEX';
const validacionTarjeta= 'Debe ingresar una tarjeta válida.';
const ingresoCuotas='Seleccioná la cantidad de cuotas. Hasta 12.';
const validacionCuotas='Debe ingresar un número válido del 1 al 12.';
const textoRecargoVisa='Si usted abona de 9 a 12 cuotas con Visa, tiene un 15% de recargo sobre el valor a abonar';
const textoRecargoMaster='Si usted abona de 6 a 12 cuotas con Mastercard, tiene un 25% de recargo sobre el valor a abonar';
const textoRecargoAmex='Si usted abona con AMEX, tiene un 35% de recargo sobre el valor a abonar';

/*Variables de uso*/ 
let monto;
let tipoTarjeta;
let cantidadCuotas;
let valorPosible;

/*Función para validar el ingreso de infornmación de parte del usuario*/
function ingresarValidar(param1, param2, param3, param4){
    let dato;
    do{
        dato = parseInt(prompt(param1));
        if((dato>=param2)&&(dato<=param3)){
            valorPosible=true;
        }
        else{
            valorPosible= false;
            alert(param4);
        }
    }while (valorPosible===false);
    return dato;
}

/*Función para cálculo de recargo*/
function recargar(recargo){
    monto+= monto*recargo/100;
    return monto;
}

/*Función que llama al cálculo y notifica al cliente datos de cuotas*/
function calcularNotificar(cuotas,recargo,texto){
    if(cantidadCuotas>=cuotas){ 
        recargar(recargo);
        alert(texto);
    }
}

/*Función para seleccionar por tipo de tarjeta el mensaje y el cálculo*/
function seleccionar(){
    switch(tipoTarjeta){
        case 1:
            calcularNotificar(cuotasVisa,recargoVisa,textoRecargoVisa);
        break;
        case 2:
            calcularNotificar(cuotasMaster,recargoMaster,textoRecargoMaster);
        break;
        case 3:
            calcularNotificar(cuotasAmex,recargoAmex,textoRecargoAmex);
        break;
        default:    break;
    }
    return monto;   
}


/*Llamado a funciones*/
monto = ingresarValidar(ingresoMonto,1,montoLimite,validacionMonto);
console.log(monto);
tipoTarjeta = ingresarValidar(ingresoTarjeta,1,3,validacionTarjeta);
console.log(tipoTarjeta);
cantidadCuotas= ingresarValidar(ingresoCuotas,1,12,validacionCuotas);
console.log(cantidadCuotas);
seleccionar();
alert('Usted estará abonando $'+monto+' en '+cantidadCuotas+" cuota/s de $"+(monto/cantidadCuotas).toFixed(2)+".");