var lista_usuario = []
function cadastrar() {
    var nome = ipt_nome.value
    var email = ipt_email.value
    var senha = ipt_senha.value
    var confirmacao = ipt_confirmacao.value
    var mensagem = ``
    var arroba = email.indexOf('@');
    var ponto = email.lastIndexOf('.');
    var email_valido = (
        arroba > 0 &&
        ponto > arroba + 1 &&
        ponto < email.length - 1
    )

if (nome == "" || email == "" || senha == "" || confirmacao == ""){
    alert(`TODOS OS CAMPOS DEVEM SER PREENCHIDOS`)
} else if (nome.length < 3) {
        alert(`O nome deve ter pelo menos 3 caracteres`)
    } else  if (email_valido == false){
        alert(`Insira um email válido`)
    }else if (senha.length < 6 ){
        alert(`A senha deve ter mais de 6 caracteres`) 

    }else if (senha.length > 30){
        alert(`A senha deve ter menos que 30 caracteres`)
    }else if (confirmacao != senha){
        alert(`A confirmação deve ser igual a senha`)
    } else {
        alert(`cadastrado`)
    }
    }

