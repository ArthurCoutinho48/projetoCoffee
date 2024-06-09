const form = document.getElementById('form-login')
const usermane = document.getElementById('username')
const password = document.getElementById('password')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    checkForm()
})

//Nova validadação após o preemchimento dos campos

usermane.addEventListener('blur', () => {
    checkInputUsermane()
})

password.addEventListener('blur', () => {
    checkInputPassword()
})

// Validação do preencimento dos inputs

function checkInputUsermane(){
    const usermaneValue = usermane.value

    if (usermaneValue === ''){
        errorInput(usermane, "Preencha um usuario!")
    }else if (usermaneValue.length != 8){
        errorInput(usermane, "Campo usuarío deve ter 8 caracteres!")
    }else{
        const formItem = usermane.parentElement
        formItem.className = 'textfielde success'
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
        formItem.className = 'textfielde success'
    }
}

//Checagem do formulário completa

function checkForm(){
    checkInputUsermane()
    checkInputPassword()

    const formItems = form.querySelectorAll('.textfielde')

    const isValid = [...formItems].every((item) => {
        return item.className == 'textfielde success'
    })

    if(isValid){
        window.location.href = '/index.html'
    }
}

//Mensagem de erro

function errorInput(input, message){
    const formItem = input.parentElement
    const textMessage = formItem.querySelector('small')

    textMessage.innerText = message
    formItem.className = 'textfielde erro'
}