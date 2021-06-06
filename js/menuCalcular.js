
function menuCalcular() {
    let tarjetas = JSON.parse(localStorage.getItem('tarjetas'));
    $('.detalles').html('');
    $('.detalles').append(`
    <section>
            <form class="formulario" id="formulario-cliente">

                <label for="monto-cliente">Ingrese el monto que desea abonar con tarjeta</label>
                <div>
                    <input type="number" name="monto-cliente" id="monto-cliente" min=1 required="true">
                </div>

                <label for="cuotas-cliente">Ingrese en cuantas cuotas desea abonarlo</label>
                <div>
                    <input type="number" min=1 max=12 required="true" id="cuotas-cliente">
                </div>

                <label for="tarjeta-cliente">Elija una tarjeta para abonarlo</label>

                <div>
                    <select name="" id="seleccion-tc" required="true"></select>
                </div>

                <button id="calcular">Calcular</button>
            </form>
        </section>
        `);

        for (const tarjeta of tarjetas) {
            $(`#seleccion-tc`).append(`<option>${tarjeta.tipoTarjeta.toUpperCase()}</option>`);
            }

            function buscarRecargo(seleccionTc) {
                return tarjetas.find(tarjeta => tarjeta.tipoTarjeta === seleccionTc)
            }
            
            const limpiarConsulta = () => {
                $(`#monto-cliente`).val('')
                $(`#cuotas-cliente`).val('')
            }
            
            $('#formulario-cliente').submit(function (calcCuotas) {
                calcCuotas.preventDefault()
                $('#details-calculo').html('')
                $('.detalles').append(`  
                <section>
                    <h3 id="calculo">Monto por cuotas y total</h3>
                    <div id="details-calculo">

                    </div>
                </section>`
            );
                let monto = parseInt($('#monto-cliente').val())
                const cuotasCliente = parseInt($('#cuotas-cliente').val())
                const seleccionTc = $('#seleccion-tc').val()
                const tarjetaElegida = buscarRecargo(seleccionTc)
                cuotasCliente < tarjetaElegida.cuotas ? monto : monto += monto * (parseInt(tarjetaElegida.recargo)) / 100
                const cuotizado = monto / cuotasCliente
                $('#details-calculo').append(`<p>El monto a pagar es de $${monto} en ${cuotasCliente} cuotas de $${cuotizado}</p>`)
                limpiarConsulta()
            })
            
}

export default menuCalcular;