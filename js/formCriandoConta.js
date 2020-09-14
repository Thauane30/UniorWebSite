const formu = document.getElementById ('formu')
const nome = document.getElementById ('nome')
const email = document.getElementById ('email')
const dataDeNascimento = document.getElementById ('dataDeNascimento')
const senha = document.getElementById ('senha')
const confirmeSenha = document.getElementById ('confirmeSenha')

// Confirmações de senha
const rNome = document.getElementById ('rNome')
const rEmail = document.getElementById ('rEmail')
const rNascimento = document.getElementById ('rNascimento')
const rSenha = document.getElementById ('rSenha')
const rConfirmeSenha = document.getElementById ('rConfirmeSenha')

const drawer = []

formu.onsubmit = (event) => {
    event.preventDefault()

    if (!validacaoGeral()) return

    let person = {
        nome: nome.value.trim(),
        email: email.value,
        dataDeNascimento: dataDeNascimento.value,
        senha: senha.value.trim(),
        confirmeSenha: confirmeSenha.value.trim()
    }

    drawer.push(person)
    localStorage.setItem('person', JSON.stringify(drawer))

    nome.value = ''
    email.value = ''
    dataDeNascimento.value = ''
    senha.value = ''
    confirmeSenha.value = ''
}

function validacaoGeral () {

    if (!nome.value) {
        rNome.textContent = 'Necessário ter um nome.'
        return false
    }else{
        rNome.textContent = ''
    }

    if (!email.value) {
        rEmail.textContent = 'Necessário ter um Email.'
        return false
    }else{
        rEmail.textContent = ''
    }

    if (!dataDeNascimento.value) {
        rNascimento.textContent = 'Necessário ter uma Data de nascimento.'
        return false
    }else{
        rNascimento.textContent = ''
    }

    if (!senha.value) {
        rSenha.textContent = 'Necessário ter uma senha.'
        return false
    }else{
        rSenha.textContent = ''
    }

    if (!confirmeSenha.value) {
        rConfirmeSenha.textContent = 'Necessário confirmar a senha.'
        return false
    }else{
        rConfirmeSenha.textContent = ''
    }

    
    return true
}