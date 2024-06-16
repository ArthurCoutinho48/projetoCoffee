const form = document.getElementById('form-novidades')
const nome = document.getElementById('username')
const email = document.getElementById('email')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    checkForm()
})

//Nova validadação após o preemchimento dos campos

nome.addEventListener('blur', () => {
    checkInputFullname()
})


email.addEventListener('blur', () => {
    checkInputEmail()
})

// Validação do preencimento dos inputs

function checkInputFullname(){
    const nomeValue = nome.value

    if (nomeValue === ''){
        errorInput(nome, "Preencha seu nome!")
    }else{
        const formItem = nome.parentElement
        formItem.className = 'novidade-textfielde'
    }
}

function checkInputEmail(){
    const emailValue = email.value

    if (emailValue === ''){
        errorInput(email, "Preencha o seu e-mail!")
    }else{
        const formItem = email.parentElement
        formItem.className = 'novidade-textfielde'
    }
}

//Checagem do formulário completa

function checkForm(){
    checkInputFullname()
    checkInputEmail()

    const formItems = form.querySelectorAll('.novidade-textfielde')

    const isValid = [...formItems].every((item) => {
        return item.className == 'novidade-textfielde'
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
    formItem.className = 'novidade-textfielde erro'
}