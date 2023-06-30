function validarFormulario() {
    //obtençao de valores inseridos pelo ususario
    var nome = document.getElementById('nome').value
    var email = document.getElementById('email').value
    var msg = document.getElementById('msg').value

    //validacao dos campos do form
    if (nome == '') {
        alert('Por favor, digite seu nome');
        return false; //impede o envio do formulario
    }
    if (email == '') {
        alert('por favor, digite o email correto');
        return false;
    }
    if (msg == '') {
        alert('por favor, nos de seu feedback');
        return false;
    }
    return true;
}
document.cookie = `nome=${encodeURI(nome)}`;
document.cookie = `email=${encodeURI(email)}`;
document.cookie = `msg=${encodeURI(msg)}`;