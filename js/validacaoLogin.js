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
    }else if (usermaneValue.length != 6){
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

//Mensagem de erro caso o usuário não esteja cadastrado

function checkCadUsermane(){
    const usermaneValue = usermane.value

    if (usermaneValue){
        errorInput(usermane, "Usuário ou senha invalida ou não cadastrado!")
    }
}

function checkCadPassword(){
    const passwordValue = password.value

    if (passwordValue){
        errorInput(password, 'Usuário ou senha invalida ou não cadastrado!')
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

        //Pegando os dados cadastros no localStorage e guardando em uma array
        var cadastro = []
        cadastro.push(localStorage.getItem('cadastroUsuario'))
        cadastro = JSON.parse(cadastro)

        //Convertendo o objeto 'Cadastro' para um array e armazenando nas variaveis
        var objeto = Object.values(cadastro)
        var usuario = objeto[3]
        var senha = objeto[4]

        if(usermane.value == usuario && password.value == senha){
    
            const formData2 = {
                usuario2: usermane.value,
            }
    
            localStorage.setItem('cadastroLogin', JSON.stringify(formData2))

            window.location.href = '/index.html'
        }else{
            checkCadPassword()
            checkCadUsermane()
        }
    }
}

//Mensagem de erro

function errorInput(input, message){
    const formItem = input.parentElement
    const textMessage = formItem.querySelector('small')

    textMessage.innerText = message
    formItem.className = 'textfielde erro'
}