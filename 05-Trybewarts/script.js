/* Variaveis */
const emailFormulario = document.getElementById('email-form')
const passwordFormulario = document.getElementById('password-form')
const buttonFormulario = document.getElementById('button-form')
const correctEmail = 'tryber@teste.com'
const correctPassword = '123456'
const buttonSubmit = document.getElementById('submit-btn')
const checkedBox = document.getElementById('agreement')
const counter = document.getElementById('counter')
const textArea = document.getElementById('textarea')

/* Validando formulário */
function validation () {
  if (
    emailFormulario.value === correctEmail &&
    passwordFormulario.value === correctPassword
  ) {
    window.alert('Olá, Tryber!')
  } else {
    window.alert('Email ou senha inválidos.')
  }
}
buttonFormulario.addEventListener('click', validation)

/* Botão de enviar formulário */
buttonSubmit.disabled = true
checkedBox.addEventListener('change', submission)
function submission () {
  if (checkedBox.value === '') {
    buttonSubmit.disabled = true
  } else {
    buttonSubmit.disabled = false
  }
}

/* Contador de caracteres  */
counter.innerText = 500
textArea.addEventListener('input', countCharacters)
function countCharacters () {
  counter.innerText = 500 - textArea.value.length
}
