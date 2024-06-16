

function index(){
    
    //Pegando os dados cadastros no localStorage e guardando em uma array
    var cadastro = []
    cadastro.push(localStorage.getItem('cadastroUsuario'))
    cadastro = JSON.parse(cadastro)
    var login = []
    login.push(localStorage.getItem('cadastroLogin'))
    login = JSON.parse(login)

    //Convertendo o objeto 'Cadastro' para um array e armazenando nas variaveis
    var objetoCadastro = Object.values(cadastro)
    var usuarioCadastro = objetoCadastro[3]

    var objetoLogin = Object.values(login)
    var usuarioLogin = objetoLogin[0]

    var login = document.getElementById('login')
    var loginMobile = document.getElementById('login-Mobile')
    var cadastro = document.getElementById('btn-Cadastro')
    var cadastroMobile = document.getElementById('btn-Cadastro-mobile')
    var sairLogin = document.getElementById('btn-Sair')
    var sairLoginMobile = document.getElementById('btn-Sair-Mobile')

    var linkLoginAtivo = document.getElementById('loginAtivo')
    var linkLoginAtivoMobile = document.getElementById('loginActive')
    var linkLoginInativo = document.getElementById('loginInativo')
    var linkLoginInativoMobile = document.getElementById('loginInativoMobile')



    if (usuarioCadastro.value === usuarioLogin.value){
        login.innerHTML = `Olá, ${usuarioLogin}!`
        loginMobile.innerHTML = `Olá, ${usuarioLogin}!`

        linkLoginAtivo.setAttribute('class', 'login-button inative')
        linkLoginAtivoMobile.setAttribute('class', 'login-button inative')
        linkLoginInativo.setAttribute('class', 'login-button')
        linkLoginInativoMobile.setAttribute('class', 'login-button')
        cadastro.setAttribute('class', 'login-button inative')
        cadastroMobile.setAttribute('class', 'login-button inative')
        sairLogin.setAttribute('class', 'cadastro-button')
        sairLoginMobile.setAttribute('class', 'cadastro-button')
    }
}

function sairLogin(){
    localStorage.setItem('cadastroLogin', '')
    var login = document.getElementById('login')
    var loginMobile = document.getElementById('login-Mobile')
    var cadastro = document.getElementById('btn-Cadastro')
    var cadastroMobile = document.getElementById('btn-Cadastro-mobile')
    var sairLogin = document.getElementById('btn-Sair')
    var sairLoginMobile = document.getElementById('btn-Sair-Mobile')

    var linkLoginAtivo = document.getElementById('loginAtivo')
    var linkLoginAtivoMobile = document.getElementById('loginActive')
    var linkLoginInativo = document.getElementById('loginInativo')
    var linkLoginInativoMobile = document.getElementById('loginInativoMobile')

    login.innerHTML = `Login`
    loginMobile.innerHTML = `Login`
    
    linkLoginAtivo.setAttribute('class', 'login-button')
    linkLoginAtivoMobile.setAttribute('class', 'login-button')
    linkLoginInativo.setAttribute('class', 'login-button inative')
    linkLoginInativoMobile.setAttribute('class', 'login-button inative')
    sairLogin.setAttribute('class', 'cadastro-button inative')
    sairLoginMobile.setAttribute('class', 'cadastro-button inative')
    cadastro.setAttribute('class', 'login-button')
    cadastroMobile.setAttribute('class', 'login-button')
}