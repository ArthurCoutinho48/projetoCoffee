const form = document.getElementById('form-recover')
const emailCadastrado = document.getElementById('emailRecuperacao')
const passwordNova = document.getElementById('passwordNova')
const passwordconfirmationNova = document.getElementById('password-confirmationNova')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    checkForm()
})

//Nova validadação após o preemchimento dos campos

emailCadastrado.addEventListener('blur', () => {
    checkInputEmail()
})

passwordNova.addEventListener('blur', () => {
    checkInputPassword()
})

passwordconfirmationNova.addEventListener('blur', () => {
    checkInputPasswordConfirmation()
})

// Validação do preencimento dos inputs

function checkInputEmail(){
    const emailValue = emailCadastrado.value

    if (emailValue === ''){
        errorInput(emailCadastrado, "Preencha o seu e-mail!")
    }else{
        const formItem = emailCadastrado.parentElement
        formItem.className = 'textfielde-recover success'
    }
}

function checkInputPassword(){
    const passwordValue = passwordNova.value

    if (passwordValue === ''){
        errorInput(passwordNova, 'A senha é obrigatoria!')
    }else if(passwordValue.length != 8) {
        errorInput(passwordNova, 'A senha precisa ter 8 caracteres!')
    }else{
        const formItem = passwordNova.parentElement
        formItem.className = 'textfielde-recover success'
    }
}

function checkInputPasswordConfirmation(){
    const passwordValue = passwordNova.value
    const confirmationPassowordValue = passwordconfirmationNova.value

    if (confirmationPassowordValue === ''){
        errorInput(passwordconfirmationNova, 'A confirmação de senha é obrigatória!')
    }else if(confirmationPassowordValue !== passwordValue){
        errorInput(passwordconfirmationNova, 'As senhas não são iguais!')
    }else{
        const formItem = passwordconfirmationNova.parentElement
        formItem.className = 'textfielde-recover success'
    }
}

//Validação para saber se o email está cadastrado
function checkInputCadEmail(){
    const emailValue = emailCadastrado.value

    if (emailValue === ''){
        errorInput(emailCadastrado, "Email invalido ou não cadastrado!")
    }else{
        const formItem = emailCadastrado.parentElement
        formItem.className = 'textfielde-recover success'
    }
}

//Checagem do formulário completa

function checkForm(){
    checkInputEmail()
    checkInputPassword()
    checkInputPasswordConfirmation()

    const formItemsText = form.querySelectorAll('.textfielde-cadastro')
    const isValid = [...formItemsText].every((item) => {
        return item.className != 'textfielde-recover erro'
    })

    if(isValid){
        //Pegando os dados cadastros no localStorage e guardando em uma array
        var cadastro = []
        cadastro.push(localStorage.getItem('cadastroUsuario'))
        cadastro = JSON.parse(cadastro)

        //Convertendo o objeto 'Cadastro' para um array e armazenando nas variaveis
        var objetoCadastro = Object.values(cadastro)
        const fullnameLocalStorage = objetoCadastro[0]
        const emailLocalStorage = objetoCadastro[1]
        const telCelularLocalStorage = objetoCadastro[2]
        const usermaneLocalStorage = objetoCadastro[3]
        var passwordLocalStorage = objetoCadastro[4]

        const emailCadastradoValue = emailCadastrado.value
        const passwordconfirmationNovaValue = passwordconfirmationNova.value

        if (emailCadastradoValue === emailLocalStorage){

            var formData = {
                nome: fullnameLocalStorage,
                email: emailLocalStorage,
                celular: telCelularLocalStorage,
                usuario: usermaneLocalStorage,
                senha: passwordconfirmationNovaValue,
            }

            localStorage.setItem('cadastroUsuario', JSON.stringify(formData))

            window.location.href = '/login.html'
        }

    }
}

//Mensagem de erro

function errorInput(input, message){
    const formItem = input.parentElement
    const textMessage = formItem.querySelector('small')

    textMessage.innerText = message
    formItem.className = 'textfielde-recover erro'
}

passwordNova.addEventListener('keypress', function(e){
    const keyCode = (e.keyCode ? e.keyCode : e.wich)

    if(keyCode > 47 && keyCode < 58){
        e.preventDefault()
    }
})

passwordconfirmationNova.addEventListener('keypress', function(e){
    const keyCode = (e.keyCode ? e.keyCode : e.wich)

    if(keyCode > 47 && keyCode < 58){
        e.preventDefault()
    }
})