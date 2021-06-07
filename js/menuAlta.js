function menuAlta() {
    $('.detalles').html('');
    $('.detalles').append(`
<section id="seccionAlta">
<form id="alta-tarjeta" class="formulario">
                <label for="tarjeta" class="etiquetas">Ingresá la tarjeta que querés registrar</label>
                <div class="" name="tarjeta" id="tarjeta">
                    <input required="true" id="input-tarjeta" autocomplete="off" type="text" class="form-control">
                </div>
                <label for="cuotas" class="etiquetas">¿A partir de qué cuota tiene recargo?</label>
                <div class="" name="cuotas" id="cuotas">
                    <input id="input-cuotas" required="true" autocomplete="off" type="number" min=1 max=12
                        class="form-control">
                </div>
                <label for="recargo" class="etiquetas">Ingresá el porcentaje de recargo (solo números)</label>
                <div class="" name="recargo" id="recargo">
                    <input id="input-recargo" required="true" autocomplete="off" type="number" min=0 max=100
                        class="form-control">
                </div>
                <button id="guardar-tc">Guardar</button>
            </form>
</section>`)
    $('.detalles').append(
        `<section>
            <ol id="tarjetas-list"></ol>
            <hr>
            <button id="details">Mostrar detalles</button>
            <button id="hide-details">Ocultar detalles</button>
            <ol id="details-list"></ol>
        </section>`
    );

    class Tarjeta {
        constructor(tipoTarjeta, recargo, cuotas) {
            this.cuotas = cuotas;
            this.id = (tarjetas.length) + 1;
            this.recargo = recargo;
            this.tipoTarjeta = tipoTarjeta;
        }
    }

    let tarjetas = JSON.parse(localStorage.getItem('tarjetas'));

    if (!tarjetas) {
        tarjetas = [];
    }

    const obtenerTarjetas = () => {
        return tarjetas;
    }

    const crearTarjeta = tarjeta => {
        tarjetas.push(tarjeta)
    }

    const limpiarFormulario = () => {
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

    const mostrarTarjetas = (showTarjetas) => {
        for (let i = 0; i < showTarjetas.length; i++) {
            let tarjeta = (showTarjetas[i].tipoTarjeta).toUpperCase()
            $('#tarjetas-list').append(`<li id="${tarjetas[i].id}">${tarjeta}.</li>`);
            $(`#seleccion-tc`).append(`<option>${tarjeta}</option>`);
        }
    }
    mostrarTarjetas(tarjetas)

    const mostrarDetalle = (detalle) => {
        for (const detail of detalle) {
            $('#details-list').append(`<li> La tarjeta ${detail.tipoTarjeta} tiene
        un ${detail.recargo}% de recargo cuando se realiza la compra en ${detail.cuotas} cuotas o mas.</li>`)
        }

    }

    $('#details').click(function (detallar) {
        detallar.preventDefault();
        $('#details-list').html('');
        mostrarDetalle(tarjetas)
        $('#details-list').fadeIn(700, () => { $('#details-list') })
        $('#details').hide()
        $('#hide-details').show()
    });

    $('#hide-details').click(function (noDetallar) {
        noDetallar.preventDefault();
        $('#details-list').fadeOut(700, () => { $('#details-list').html('') })
        $('#details').show()
        $('#hide-details').hide()
    });
}

export default menuAlta;