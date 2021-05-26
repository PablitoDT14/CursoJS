class Tarjeta {
    constructor (tipoTarjeta, recargo, cuotas){
        this.cuotas=cuotas;
        this.id= (tarjetas.length)+1;
        this.recargo=recargo;
        this.tipoTarjeta = tipoTarjeta;
    }
}

const URL= 'https://jsonplaceholder.typicode.com/users'
let tarjetas = JSON.parse(localStorage.getItem('tarjetas'));

if (!tarjetas){
    tarjetas=[];
}

$(`h1#titulo`).mouseover( ()=> { 
    $('h1#titulo').addClass("titulo")
    $(`h1#titulo`).click( () => {$('h1#titulo').animate({
        opacity:'1'
    },2000)})
})
$(`h1#titulo`).mouseleave( ()=> { $('h1#titulo').removeClass("titulo")})
$(`h1#titulo`).click( () => {$('h1#titulo').animate({
    opacity:'0.5'
},2000)})

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

$('#alta-tarjeta').submit(function (saveTc) { 
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
    $('#details').show()
    $('#hide-details').hide()
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
    $('#details-list').fadeIn(700,()=> {$('#details-list')})
    $('#details').hide()
    $('#hide-details').show()
});

$('#hide-details').click(function (noDetallar) { 
    noDetallar.preventDefault();
    $('#details-list').fadeOut(700,()=> {$('#details-list').html('')})
    $('#details').show()
    $('#hide-details').hide()
});

$('#users').click(function (mostrarUsuarios) { 
    mostrarUsuarios.preventDefault();
    $('#details-users').html('');
    $.get(`${URL}`, (response, status) =>{
        if (status === 'success'){
            for(const user of response){
                $('#details-users').append(`
                <p>${user.username} - ${user.email}</p>  
                `) } } })
});
