function menuUsers() {
    const URL = './users/users.json'
    $('.detalles').html('');
    $('.detalles').append(`<ul id='lista-ul'></ul>`)
    $.ajax({
        method: "GET",
        url: `${URL}`,
        success: function (response) {
            for (const user of response) {
                $('#lista-ul').append(`
                             <li class="list-group-item">${user.userName} - ${user.mail}</li>
                             `)
            }
        }
    })
}

export default menuUsers