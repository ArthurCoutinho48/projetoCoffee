const form = document.getElementById('form-cadastro')
const fullname = document.getElementById('fullname')
const cpf = document.getElementById('cpf')
const dataNascimento = document.getElementById('dataNascimento')
const nomeMae = document.getElementById('nomeMae')
const genero = document.getElementById('gender')
const email = document.getElementById('email')
const telFixo = document.getElementById('telefoneFixo')
const telCelular = document.getElementById('telefoneCelular')
const cep = document.getElementById('cep')
const logradouro = document.getElementById('logradouro')
const bairro = document.getElementById('bairro')
const municipio = document.getElementById('municipio')
const uf = document.getElementById('uf')
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

genero.addEventListener('blur', () => {
    checkInputGenero()
})

email.addEventListener('blur', () => {
    checkInputEmail()
})

telFixo.addEventListener('blur', () => {
    checkTelFixo()
    mascaraTelefone(telFixo)
})

telCelular.addEventListener('blur', () => {
    checkTelCelular()
    mascaraCelular(telCelular)
})

cep.addEventListener('blur', () => {
    checkCEP()
})

logradouro.addEventListener('blur', () => {
    checkLogradouro()
})

bairro.addEventListener('blur', () => {
    checkBairro()
})

municipio.addEventListener('blur', () => {
    checkMunicipio()
})

uf.addEventListener('blur', () => {
    checkUF()
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
    let anoNascimento = dataNascimentoValue.slice(0, 4)
    let data = new Date ()
    let dia = data.getDate().toString().padStart(2,'0')
    let mes = String(data.getMonth() + 1).padStart(2,'0')
    let ano = data.getFullYear()
    let anoAtual = ano + '-' + mes + '-' + dia


    if (dataNascimentoValue === ''){
        errorInput(dataNascimento, 'Preencha sua data de nascimento!')
    }else if(dataNascimentoValue > anoAtual){
        errorInput(dataNascimento, 'Ano de nascimento inválido!')
    }else if((ano - anoNascimento) < 18){
            errorInput(dataNascimento, 'Cadastro proibido para menores de idade!')
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

function checkInputGenero(){
    const generoValue = genero.value

    if (generoValue === ''){
        errorInput2(genero, "Preencha o seu gênero!")
    }else{
        const formItem = genero.parentElement
        formItem.className = 'gender-group success'
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

function checkTelFixo(){
    const telFixoValue = telFixo.value

    if (telFixoValue === ''){
        errorInput(telFixo, "Preencha o seu telefone fixo!")
    }else if (telFixoValue.length < 12){
        errorInput(telFixo, "Preencha o seu telefone fixo!")
    }else{
        const formItem = telFixo.parentElement
        formItem.className = 'textfielde-cadastro success'
    }
}

function checkTelCelular(){
    const telCelularValue = telCelular.value

    if (telCelularValue === ''){
        errorInput(telCelular, "Preencha o seu telefone celular!")
    }else if (telCelularValue.length < 13){
        errorInput(telCelular, "Preencha o seu telefone celular!")
    }
    else{
        const formItem = telCelular.parentElement
        formItem.className = 'textfielde-cadastro success'
    }
}

function checkCEP(){ 
    const cepValue = cep.value

    if (cepValue === ''){
        errorInput(cep, "Preencha o seu CEP!")
    }else if (cepValue.length != 9){
        errorInput(cep, "CEP inválido!")
    }else{
        const formItem = cep.parentElement
        formItem.className = 'textfielde-cadastro success'
    }
}

function checkLogradouro(){ 
    const logradouroValue = logradouro.value

    if (logradouroValue === ''){
        errorInput(logradouro, "Preencha o seu logradouro!")
    }else{
        const formItem = logradouro.parentElement
        formItem.className = 'textfielde-cadastro success'
    }
}

function checkBairro(){ 
    const bairroValue = bairro.value

    if (bairroValue === ''){
        errorInput(bairro, "Preencha o seu bairro!")
    }else{
        const formItem = bairro.parentElement
        formItem.className = 'textfielde-cadastro success'
    }
}

function checkMunicipio(){ 
    const municipioValue = bairro.value

    if (municipioValue === ''){
        errorInput(municipio, "Preencha o seu município!")
    }else{
        const formItem = municipio.parentElement
        formItem.className = 'textfielde-cadastro success'
    }
}

function checkUF(){ 
    const ufValue = uf.value.toUpperCase()
    let ufLista = ['RO', 'AC', 'AM', 'RR', 'PA', 'AP', 'TO', 'MA', 'PI', 'CE', 'RN', 'PB', 'PE', 'AL', 'AL', 'SE', 'BA', 'MG', 'ES', 'RJ', 'SP', 'PR', 'PR', 'SC', 'RS', 'MS', 'MT', 'GO','DF']

    if (ufValue === ''){
        errorInput(uf, "Preencha a sua UF!")
    }else if(ufLista.includes(ufValue) == false){
        errorInput(uf, "UF inválida!")
    } else{
        const formItem = uf.parentElement
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
    checkInputGenero()
    checkInputEmail()
    checkTelFixo()
    checkTelCelular()
    checkCEP()
    checkLogradouro()
    checkBairro()
    checkMunicipio()
    checkUF()
    checkInputUsermane()
    checkInputPassword()
    checkInputPasswordConfirmation()

    const formItemsText = form.querySelectorAll('.textfielde-cadastro')
    const isValid1 = [...formItemsText].every((item1) => {
        return item1.className != 'textfielde-cadastro erro'
    })

    const formItemsGender = form.querySelectorAll('.gender-group')

    const isValid2 = [...formItemsGender].every((item2) => {
        return item2.className == 'gender-group success'
    })

    if(isValid1 && isValid2){

        const fullnameValue = fullname.value
        const emailValue = email.value
        const telCelularValue = telCelular.value
        const usermaneValue = usermane.value
        const passwordValue = password.value
        
        var formData = {
            nome: fullnameValue,
            email: emailValue,
            celular: telCelularValue,
            usuario: usermaneValue,
            senha: passwordValue
        }

        localStorage.setItem('cadastroUsuario', JSON.stringify(formData))

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

function errorInput2(select, message){
    const formItem = select.parentElement
    const textMessage = formItem.querySelector('small')

    textMessage.innerText = message
    formItem.className = 'gender-group erro'
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

function mascaraTelefone(telFixo){
    let telFixoValue = telFixo.value

    //Removendo os caracteres não numéricos e limitando a 11 dígitos.
    telFixoValue = telFixoValue.replace(/\D/g, '').substring(0,12)
    
    let pais = telFixoValue.slice(0,2)
    let ddd = telFixoValue.slice(2,4)
    let parte1 = telFixoValue.slice(4,8)
    let parte2 = telFixoValue.slice(8,12)
    let numeroFormatado = ''

    if (telFixoValue.length == 12){
        numeroFormatado = `(+${pais}) ${ddd} ${parte1}-${parte2}`
    }
    
    //Enviar para o campo o número formatado
    telFixo.value = numeroFormatado
}


function mascaraCelular(telCelular){
    let telCelularValue = telCelular.value

    //Removendo os caracteres não numéricos e limitando a 11 dígitos.
    telCelularValue = telCelularValue.replace(/\D/g, '').substring(0,13)
    
    let pais = telCelularValue.slice(0,2)
    let ddd = telCelularValue.slice(2,4)
    let parte1 = telCelularValue.slice(4,9)
    let parte2 = telCelularValue.slice(9,13)
    let numeroFormatado = ''

    if (telCelularValue.length == 13){
        numeroFormatado = `(+${pais}) ${ddd} ${parte1}-${parte2}`
    }
    
    //Enviar para o campo o número formatado
    telCelular.value = numeroFormatado
}

usermane.addEventListener('keypress', function(e){
    const keyCode = (e.keyCode ? e.keyCode : e.wich)

    if(keyCode > 47 && keyCode < 58){
        e.preventDefault()
    }
})

