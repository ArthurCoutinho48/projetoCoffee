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

    if (usuarioCadastro.value === usuarioLogin.value){
        login.innerHTML = `Olá, ${usuarioLogin}!`
    }
}

function sairLogin(){
    localStorage.setItem('cadastroLogin', '')
    var login = document.getElementById('login')
    login.innerHTML = `Login`
}