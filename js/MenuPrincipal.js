import menuAlta from './menuAlta.js'
import menuCalcular from './menuCalcular.js';
import menuUsers from './menuUsers.js'


$(`h1#titulo`).mouseover(() => {
    $('h1#titulo').addClass("titulo")
    $(`h1#titulo`).click(() => {
        $('h1#titulo').animate({
            opacity: '1'
        }, 2000)
    })
})
$(`h1#titulo`).mouseleave(() => { $('h1#titulo').removeClass("titulo") })
$(`h1#titulo`).click(() => {
    $('h1#titulo').animate({
        opacity: '0.5'
    }, 2000)
})
$('#form-select').click(function (menu) { 
    menu.preventDefault();
    const accionable= $('#form-select').val()
    switch (accionable){
        case 'alta' : {
            menuAlta() 
            break
        }
        case 'calculo': {
            menuCalcular()
            break
        }
        case 'lista-de-usuarios': {
            menuUsers()
            break
        }
    }
});
