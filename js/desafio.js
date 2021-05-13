// Clase Tarjeta
class Tarjeta {
    constructor (tipoTarjeta, recargo, cuotas){
        this.cuotas=cuotas;
        this.id= (tarjetas.length)+1;
        this.recargo=recargo;
        this.tipoTarjeta = tipoTarjeta;
    }
}

let tarjetas = JSON.parse(localStorage.getItem('tarjetas'));

if (!tarjetas){
    tarjetas=[];
}

$(`h1#titulo`).mouseover( ()=> { $('h1#titulo').addClass("titulo")})
$(`h1#titulo`).mouseleave( ()=> { $('h1#titulo').removeClass("titulo")})

const obtenerTarjetas =() => {
    return tarjetas;
}

const crearTarjeta = tarjeta =>{
    tarjetas.push(tarjeta)
}

const limpiarFormulario = ()=>{
    $(`#input-tarjeta`).val('')
    $(`#input-cuotas`).val('')
    $(`#input-recargo`).val('')
}

$('#guardar-tc').submit(function (saveTc) { 
    saveTc.preventDefault();
    const tipoTarjeta = ($('#input-tarjeta').val()).toUpperCase()
    const cuotas = $('#input-cuotas').val()
    const recargo = $('#input-recargo').val()
    const tarjeta = new Tarjeta(tipoTarjeta, recargo, cuotas);
    crearTarjeta(tarjeta);
    localStorage.setItem('tarjetas', JSON.stringify(tarjetas));
    limpiarFormulario()
    $('#tarjetas-list').append(`<li id="${tarjeta.id}">${tarjeta.tipoTarjeta}.</li>`);
    $('#details-list').html('');
    $(`#seleccion-tc`).append(`<option>${tarjeta.tipoTarjeta}</option>`);
});

const mostrarTarjetas = (showTarjetas) =>{
    for (let i=0; i< showTarjetas.length; i++){
        let tarjeta= (showTarjetas[i].tipoTarjeta).toUpperCase()
        $('#tarjetas-list').append(`<li id="${tarjetas[i].id}">${tarjeta}.</li>`);
        $(`#seleccion-tc`).append(`<option>${tarjeta}</option>`);
    }
}
mostrarTarjetas(tarjetas)

const mostrarDetalle = (detalle) =>{
    for (let i=0; i< detalle.length; i++){
       $('#details-list').append(`<li> La tarjeta ${detalle[i].tipoTarjeta} tiene
       un ${detalle[i].recargo}% de recargo cuando se realiza la compra en ${detalle[i].cuotas} cuotas o mas.</li>`)
    }
}

$('#details').click(function (detallar) { 
        detallar.preventDefault();
        $('#details-list').html('');
        mostrarDetalle(tarjetas) 
    });




