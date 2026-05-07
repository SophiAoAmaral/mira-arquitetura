const form = document.getElementById('form-contato');

// ============================================
// 1. REGRAS DE VALIDAÇÃO
// Cada função recebe o valor e retorna:
//   - string com a mensagem de erro, OU
//   - null se estiver válido
// ============================================
const validadores = {
    nome: function(valor) {
        if (!valor.trim()) return 'Informe seu nome completo.';
        if (valor.trim().length < 3) return 'Nome muito curto.';
        if (!valor.trim().includes(' ')) return 'Informe nome e sobrenome.';
        return null;
    },

    email: function(valor) {
        if (!valor.trim()) return 'Informe seu e-mail.';
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(valor)) return 'E-mail inválido.';
        return null;
    },

    telefone: function(valor) {
        if (!valor.trim()) return 'Informe seu telefone.';
        // Remove tudo que não é número e checa o tamanho
        const apenasNumeros = valor.replace(/\D/g, '');
        if (apenasNumeros.length < 10 || apenasNumeros.length > 11) {
            return 'Telefone inválido. Use DDD + número.';
        }
        return null;
    },

    projeto: function(valor) {
        if (!valor.trim()) return 'Informe o tipo de projeto.';
        return null;
    },

    mensagem: function(valor) {
        // Mensagem é opcional, mas se preenchida exige conteúdo mínimo
        if (valor.trim() && valor.trim().length < 10) {
            return 'Conte um pouco mais (mínimo 10 caracteres).';
        }
        return null;
    }
};

// ============================================
// 2. FUNÇÃO QUE VALIDA UM CAMPO E ATUALIZA A UI
// ============================================
function validarCampo(campo) {
    const regra = validadores[campo.name];
    if (!regra) return true;

    const erro = regra(campo.value);
    const spanErro = document.getElementById('erro-' + campo.name);

    if (erro) {
        campo.classList.add('invalido');
        campo.classList.remove('valido');
        spanErro.textContent = erro;
        return false;
    } else {
        campo.classList.remove('invalido');
        // Só marca como válido se o usuário digitou algo
        if (campo.value.trim()) {
            campo.classList.add('valido');
        }
        spanErro.textContent = '';
        return true;
    }
}

// ============================================
// 3. EVENTOS POR CAMPO
// ============================================
const campos = form.querySelectorAll('input, textarea');

campos.forEach(function(campo) {
    // Valida quando o usuário sai do campo
    campo.addEventListener('blur', function() {
        validarCampo(campo);
    });

    // Enquanto digita, só revalida se já tinha erro
    // (evita reclamar antes da hora)
    campo.addEventListener('input', function() {
        if (campo.classList.contains('invalido')) {
            validarCampo(campo);
        }
    });
});

// ============================================
// 4. SUBMIT
// ============================================
form.addEventListener('submit', function(evento) {
    evento.preventDefault();

    let tudoOk = true;
    campos.forEach(function(campo) {
        if (!validarCampo(campo)) tudoOk = false;
    });

    if (tudoOk) {
        console.log('Formulário válido! Enviando...');
        // Aqui você faria fetch() pro backend
        alert('Mensagem enviada com sucesso!');
        form.reset();
        // Remove as bordas verdes ao resetar
        campos.forEach(function(campo) {
            campo.classList.remove('valido', 'invalido');
        });
    } else {
        // Foca no primeiro campo com erro (boa UX)
        const primeiroErro = form.querySelector('.invalido');
        if (primeiroErro) primeiroErro.focus();
    }
});