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
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!email){
        inputEmail.classList.add('invalid');
        erroEmail.classList.add('error');
        label[1].classList.add('error');
        erroEmail.innerText = 'Informe seu email.';
        return false;
    }

     if (!regex.test(email)) {
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

function validarNumero(){
    const telefone = inputTel.value.trim();
    const regex = /(?:([1-9]{2})?)(\d{4,5})(\d{4})$/;

    if(!telefone){
        inputTel.classList.add('invalid');
        erroTel.classList.add ('error');
        label[2].classList.add('error')
        erroTel.innerText = 'Informe seu telefone.';
        return false
    }

    if(!regex.test(telefone)){
        inputTel.classList.add('invalid');
        erroTel.classList.add ('error');
        label[2].classList.add('error');  
        erroTel.innerText = 'insira um telefone valido';
        return false
    }



    inputTel.classList.remove('invalid');
    label[2].classList.remove('error');
    erroTel.textContent = '';
    return true;
}


function handleSubmit(e){
    e.preventDefault();

    if(validarNome() && validarEmail() && validarNumero()){
        alert('enviado')
    
    }
}



form.addEventListener('submit', handleSubmit);



const elements = document.querySelectorAll('.hidden');

const myObserver  = new IntersectionObserver( (e) =>{
    e.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    })

});


elements.forEach((element) =>{
        myObserver.observe(element)
    });


const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});