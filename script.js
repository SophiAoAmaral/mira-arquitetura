const form = document.querySelector('#form');
const inputEmail = document.querySelector('#email');
const inputName = document.querySelector('#nome');
const inputTel = document.querySelector('#telefone');
const label = document.querySelectorAll('label')

const erroNome = document.querySelector('#erro-nome');
const erroEmail = document.querySelector('#erro-email');
const erroTel = document.querySelector('#erro-tel');

function validarNome(){
    const nome = inputName.value.trim();
    const regex = /^[A-Za-zÀ-ÿ\s'-]+$/;

    if(!nome){
        inputName.classList.add('invalid');
        erroNome.classList.add ('error');
        label[0].classList.add ('error');
        erroNome.innerText = 'Informe seu nome.';
        return false;
    }

    if (!regex.test(nome)) {
        inputName.classList.add('invalid');
        erroNome.classList.add = ('error');
        erroNome.innerText = 'O nome contém caracteres inválidos.';
        return false;
    }

    inputName.classList.remove('invalid');
    label[0].classList.remove('error')
    erroNome.textContent = '';
    return true;
}

function validarEmail(){
    const email = inputEmail.value.trim();
    const regexEmail =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!email){
        inputEmail.classList.add('invalid');
        erroEmail.classList.add ('error');
        label[1].classList.add ('error');
        erroEmail.innerText = 'Informe seu email.';
        return false;
    }

     if (!regexEmail.test(email)) {
        inputEmail.classList.add('invalid');
        erroEmail.classList.add = ('error');
        erroEmail.innerText = 'insira um email valido';
        return false;
    }


    inputEmail.classList.remove('invalid');
    label[1].classList.remove('error')
    erroEmail.textContent = '';
    return true;
}



function handleSubmit(e){
    e.preventDefault()
    validarNome();
    validarEmail()
}



form.addEventListener('submit', handleSubmit)