function abrirMenu(){
    let menuAtivo = document.getElementById('abrirMenu')
    let menuFechar = document.getElementById('fecharMenu')
    let infoMenu = document.getElementById('menu')

    infoMenu.setAttribute('class', 'mobile-menu')
    menuAtivo.setAttribute('class', 'mobile-menu-icon inative')
    menuFechar.setAttribute('class', 'mobile-menu-icon')
}

function fecharMenu(){
    let menuAtivo = document.getElementById('abrirMenu')
    let menuFechar = document.getElementById('fecharMenu')
    let infoMenu = document.getElementById('menu')

    infoMenu.setAttribute('class', 'mobile-menu inative')
    menuAtivo.setAttribute('class', 'mobile-menu-icon')
    menuFechar.setAttribute('class', 'mobile-menu-icon inative')
}

function abrirSubMenu(){
    let subMenuAtivo = document.getElementById('abrirSubMenu')
    let subMenuFechar = document.getElementById('fecharSubMenu')
    let infoSubMenu = document.getElementById('subMenu')
    let iconAbrir = document.getElementById('icon-mobile-abrir')
    let iconFechar = document.getElementById('icon-mobile-fechar')

    subMenuAtivo.setAttribute('class', 'drop-text-mobile inative')
    subMenuFechar.setAttribute('class', 'drop-text-mobile')
    infoSubMenu.setAttribute('class', 'drop-links-mobile active')
    iconAbrir.setAttribute('class', 'icon-mobile inative')
    iconFechar.setAttribute('class', 'icon-mobile')
}

function fecharSubMenu(){
    var subMenuAtivo = document.getElementById('abrirSubMenu')
    var subMenuFechar = document.getElementById('fecharSubMenu')
    var infoSubMenu = document.getElementById('subMenu')
    var iconAbrir = document.getElementById('icon-mobile-abrir')
    var iconFechar = document.getElementById('icon-mobile-fechar')

    subMenuAtivo.setAttribute('class', 'drop-text-mobile')
    subMenuFechar.setAttribute('class', 'drop-text-mobile inative')
    infoSubMenu.setAttribute('class', 'drop-links-mobile inative')
    iconAbrir.setAttribute('class', 'icon-mobile')
    iconFechar.setAttribute('class', 'icon-mobile inative')
}