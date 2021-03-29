let monto;
let tipoTarjeta;
let cantidadCuotas;
let valorPosible;
const recargoVisa=15;
const recargoMaster=25;
const recargoAmex=35;

do{
    monto = parseInt(prompt('Ingresá el monto a abonar'));
    if((monto>0)&&(monto !== isNaN)){
        valorPosible=true;
    }
    else{
        valorPosible= false;
        alert('Debe ingresar un valor numérico superior a cero.');
    }
}while (valorPosible===false);

do{
    tipoTarjeta=parseInt(prompt('Seleccioná la tarjeta de tu preferencia: \n 1-VISA (9 cuotas sin interés) \n 2-Mastercard (6 cuotas sin interés) \n 3-AMEX'));
    if((tipoTarjeta>=1)&&(tipoTarjeta<=3)){
        valorPosible=true;
    }
    else{
        valorPosible= false;
        alert('Debe ingresar una tarjeta válida.');
    }
}while (valorPosible===false);

do{
    cantidadCuotas=parseInt(prompt('Seleccioná la cantidad de cuotas. Hasta 12.'));
    if((cantidadCuotas>=1)&&(cantidadCuotas<=12)){
        valorPosible=true;
    }
    else{
        valorPosible= false;
        alert('Debe ingresar un número válido del 1 al 12.');
    }
}while (valorPosible===false);


switch(tipoTarjeta){
    case 1:
        if(cantidadCuotas>9){ 
            recargar(recargoVisa);
            alert('Si usted abona de 9 a 12 cuotas con Visa, tiene un 15% de recargo sobre el valor a abonar');
        }
        break;
    case 2:
        if(cantidadCuotas>6){
            recargar(recargoMaster);
            alert('Si usted abona de 6 a 12 cuotas con Mastercard, tiene un 25% de recargo sobre el valor a abonar');
        }
        break;
    case 3:
        recargar(recargoAmex);
        alert('Si usted abonacon AMEX, tiene un 35% de recargo sobre el valor a abonar');        
        break;
}


function recargar(recargo){
    monto+= monto*recargo/100;
    return monto;
}


alert('Usted estará abonando $'+monto+' en '+cantidadCuotas+" cuota/s de $"+(monto/cantidadCuotas).toFixed(2)+".");