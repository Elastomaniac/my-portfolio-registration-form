'use strict'
let emailRegistration = document.querySelector('#email-reg')
let passwordRegistration = document.querySelector('#password-reg')
let btnRegistration = document.querySelector('#btn-reg')
let errorEmailRegistration = document.querySelector('#email-empty')
let errorPasswordRegistration = document.querySelector('#password-empty')
let passwordErrorLength = document.querySelector('#password-length')
let emailValid = document.querySelector('#email-valid')

let emailResult = ''
let passwordResult = ''

emailRegistration.addEventListener('input', (even) => {
  emailResult = even.target.value.trim()
})

passwordRegistration.addEventListener('input', (even) => {
  passwordResult = even.target.value.trim()
})

btnRegistration.addEventListener('click', (even) => {
  even.preventDefault()
  validRegistration()
})

const validRegistration = () => {
  //проверка на пустые строки email и password
  if (emailResult.length == '') {
    errorEmailRegistration.style.display = 'block'
    emailRegistration.style.borderColor = 'red'
  } else {
    errorEmailRegistration.style.display = 'none'
    emailRegistration.style.borderColor = 'inherit'
  }

  if (passwordResult.length == '') {
    errorPasswordRegistration.style.display = 'block'
    passwordRegistration.style.borderColor = 'red'
  } else {
    errorPasswordRegistration.style.display = 'none'
    passwordRegistration.style.borderColor = 'inherit'
  }

  //проверка на длину пароля
  if (passwordResult.length < 8) {
    passwordErrorLength.style.display = 'block'
  } else {
    passwordErrorLength.style.display = 'none'
  }
  //проверка валидности email поля
  if(!validateEmail(emailResult)){
    emailValid.style.display = 'block'
  } else {
    emailValid.style.display = 'none'
  }
}

const validateEmail = (email) => {

  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return re.test(String(email).toLowerCase())

}
