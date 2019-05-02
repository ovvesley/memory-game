function startGame() {
    data = getConfigGame()
    setScreenGame(data)
        // showScreenGame()
        // gameRunning()
        // isWinner()
        // restart()
}

function getConfigGame() {
    return dataLogin
}

function setScreenGame(d) {
    let hard = 8;
    let sGame = document.getElementById('screen-game')
    for (let i = 0; i < hard; i++) {
        let trElement = document.createElement('tr')
        trElement.className = 'img-coluns'
        sGame.appendChild(trElement)
        for (let indexJ = 0; indexJ < hard; indexJ++) {
            let tdElement = document.createElement('td')
            tdElement.className = 'td-cells'
            let img = document.createElement('img')
            img.className = 'img-cells'
            img.alt = 'a' + indexJ
            img.src = '../assets/gifs/gif-ground/00.gif'
            tdElement.appendChild(img)
            trElement.appendChild(tdElement)
        }

    }



}