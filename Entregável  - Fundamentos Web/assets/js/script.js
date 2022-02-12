/*
Case Sensitive = reconhece letras maiúsculas e minúsculas

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let data = document.querySelector("#data")

nome.style.width = "100%"
email.style.width = "100%"

function validaNome() {

    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length <=2) {
        txtNome.innerHTML = "Nome inválido"
        txtNome.style.color = "red"
     } else {
         txtNome.innerHTML = "Nome válido"
         txtNome.style.color = "green"
     }

}

function validaEmail() {
    
    let txtEmail = document.querySelector("#txtEmail")
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = "green"
    }
    
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")
    if (assunto.value.length >=150) {
        txtAssunto.innerHTML = "Texto muito grande, digite no máximo 150 caracteres"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    } else {
        txtAssunto.style.display = "none"
    }
}