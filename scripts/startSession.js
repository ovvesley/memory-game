let state = Object.freeze({
    StartScreen: 0,
    GameScreen: 1,
    ScoreScreen: 2
})
let stateLoginScreen = Object.freeze({
    LoginScreen: 0,
    SceneScreen: 1,
    DificultScreen: 2,
    GameScreen: 3
})
let currentStateLoginScreen;
let dataLogin = {
    username: null,
    perfil: 0,
    theme: 0,
    dificult: 0
}

function buttonConfig(b) {
    currentStateLoginScreen++;
    if (currentStateLoginScreen > 2) {
        b.style.display = 'none'
        console.log(dataLogin)
        showMenu(true)
        startGame()

    }

    console.log(currentStateLoginScreen)
    let screensConfig = document.getElementsByClassName('screens-config')
    transformClassNone(screensConfig, currentStateLoginScreen)
}

function showMenu(value) {
    let tabDetails = document.getElementsByClassName('menu')[0]
    setMenu()
    if (value) {
        tabDetails.style.display = 'flex'
    } else {
        tabDetails.style.display = 'none'
    }

}

function setMenu() {
    let character = document.getElementById('character').children[0]
    let point = document.getElementById('point')
    let themes = document.getElementById('themes')
    let username = document.getElementById('usernameView')
    username.textContent = dataLogin.username;
    character.alt = dataLogin.username;
    character.src = getPerfil(dataLogin)
    console.log(character)
}

function getPerfil(dataLogin) {
    if (dataLogin.perfil == 'perfil00')
        return 'assets/perfil01.gif'
    else
        return 'assets/perfil02.gif'

}


function startSession() {
    currentStateLoginScreen = stateLoginScreen.LoginScreen
    let screensConfig = document.getElementsByClassName('screens-config')
    showMenu(false)
    transformClassNone(screensConfig, currentStateLoginScreen)
}

function transformClassNone(c, state) {
    for (let index = 0; index < c.length; index++) {
        if (index === state) {
            c[index].style.display = 'block'
            continue
        }
        c[index].style.display = 'none'
    }
}

function avatarSelected(obj) {
    if (document.getElementById('username').value != '') {
        obj.style.opacity = '1'
        obj.style.transform = 'scale(1.5)'
    }
    dataLogin.perfil = obj.alt
    telaLogin()

}

function themeSelected(obj) {
    obj.style.opacity = '1'
    obj.style.backgroundColor = '#48697c'
    dataLogin.theme = obj.alt

    buttonConfig(document.getElementById('button-config'))
}

function dificultSelected(obj) {
    obj.style.opacity = '1'
    obj.style.backgroundColor = '#48697c'
    dataLogin.dificult = parseInt(obj.alt)

    buttonConfig(document.getElementById('button-config'))
}

function telaLogin() {
    let username = document.getElementById('username').value
    dataLogin.username = username
}