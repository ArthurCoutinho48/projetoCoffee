const form = document.getElementById('form-cadastro')
const fullname = document.getElementById('fullname')
const cpf = document.getElementById('cpf')
const dataNascimento = document.getElementById('dataNascimento')
const nomeMae = document.getElementById('nomeMae')
const email = document.getElementById('email')
const usermane = document.getElementById('usermane')
const password = document.getElementById('password')
const passwordConfirmation = document.getElementById('password-confirmation')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    checkForm()
})


//Nova validadação após o preemchimento dos campos

fullname.addEventListener('blur', () => {
    checkInputFullname()
})

cpf.addEventListener('blur', () => {
    checkInputCPF()
    RegExCPF(cpf)
})

dataNascimento.addEventListener('blur', () => {
    checkInputDataNascimento()
})

nomeMae.addEventListener('blur', () => {
    checkInputNomeMae()
})

email.addEventListener('blur', () => {
    checkInputEmail()
})

usermane.addEventListener('blur', () => {
    checkInputUsermane()
})

password.addEventListener('blur', () => {
    checkInputPassword()
})

passwordConfirmation.addEventListener('blur', () => {
    checkInputPasswordConfirmation()
})

// Validação do preencimento dos inputs

function checkInputFullname(){
    const fullnameValue = fullname.value

    if (fullnameValue === ''){
        errorInput(fullname, "Preencha seu nome!")
    }else if (fullnameValue.length < 15){
        errorInput(fullname, "Campo deve ter no mínimo 15 caracteres!")
    }else{
        const formItem = fullname.parentElement
        formItem.className = 'textfielde-cadastro success'
    }
}

function checkInputCPF(){
    const cpfValue = cpf.value

    if (cpfValue === ''){
        errorInput(cpf, "Preencha seu CPF!")
    }else if (cpfValue.length != 14){
        errorInput(cpf, "Preencha seu CPF!")
    }else{
        const formItem = cpf.parentElement
        formItem.className = 'textfielde-cadastro success'
    }
}

function checkInputDataNascimento(){
    const dataNascimentoValue = dataNascimento.value

    if (dataNascimentoValue === ''){
        errorInput(dataNascimento, 'Preencha sua data de nascimento!')
    }else{
        const formItem = dataNascimento.parentElement
        formItem.className = 'textfielde-cadastro success'
    }
}

function checkInputNomeMae(){
    const nomeMaeValue = nomeMae.value

    if (nomeMaeValue === ''){
        errorInput(nomeMae, "Preencha o nome da sua mãe!")
    }else{
        const formItem = nomeMae.parentElement
        formItem.className = 'textfielde-cadastro success'
    }
}

function checkInputEmail(){
    const emailValue = email.value

    if (emailValue === ''){
        errorInput(email, "Preencha o seu e-mail!")
    }else{
        const formItem = email.parentElement
        formItem.className = 'textfielde-cadastro success'
    }
}

function checkInputUsermane(){
    const usermaneValue = usermane.value

    if (usermaneValue === ''){
        errorInput(usermane, "Preencha um usuario!")
    }else if (usermaneValue.length != 6){
        errorInput(usermane, "Campo usuarío deve ter 6 caracteres!")
    }else{
        const formItem = usermane.parentElement
        formItem.className = 'textfielde-cadastro success'
    }
}

function checkInputPassword(){
    const passwordValue = password.value

    if (passwordValue === ''){
        errorInput(password, 'A senha é obrigatoria!')
    }else if(passwordValue.length != 8) {
        errorInput(password, 'A senha precisa ter 8 caracteres!')
    }else{
        const formItem = password.parentElement
        formItem.className = 'textfielde-cadastro success'
    }
}

function checkInputPasswordConfirmation(){
    const passwordValue = password.value
    const confirmationPassowordValue = passwordConfirmation.value

    if (confirmationPassowordValue === ''){
        errorInput(passwordConfirmation, 'A confirmação de senha é obrigatória!')
    }else if(confirmationPassowordValue !== passwordValue){
        errorInput(passwordConfirmation, 'As senhas não são iguais!')
    }else{
        const formItem = passwordConfirmation.parentElement
        formItem.className = 'textfielde-cadastro success'
    }
}

//Checagem do formulário completa

function checkForm(){
    checkInputFullname()
    checkInputCPF()
    checkInputDataNascimento()
    checkInputNomeMae()
    checkInputEmail()
    checkInputUsermane()
    checkInputPassword()
    checkInputPasswordConfirmation()

    const formItems = form.querySelectorAll('.textfielde-cadastro')

    const isValid = [...formItems].every((item) => {
        return item.className == 'textfielde-cadastro success'
    })

    if(isValid){
        window.location.href = '/login.html'
    }
}

//Mensagem de erro

function errorInput(input, message){
    const formItem = input.parentElement
    const textMessage = formItem.querySelector('small')

    textMessage.innerText = message
    formItem.className = 'textfielde-cadastro erro'
}

//Máscaras

function RegExCPF(cpf){
    const elemtentoAlvo = cpf
    const cpfValue = cpf.value   

    let cpfAtualizado;

    cpfAtualizado = cpfValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, function(regex, argumento1, argumento2, argumento3, argumento4) {
        return argumento1 + '.' + argumento2 + '.' + argumento3 + '-' + argumento4;
    })  

    elemtentoAlvo.value = cpfAtualizado; 
}

usermane.addEventListener('keypress', function(e){
    const keyCode = (e.keyCode ? e.keyCode : e.wich)

    if(keyCode > 47 && keyCode < 58){
        e.preventDefault()
    }
})