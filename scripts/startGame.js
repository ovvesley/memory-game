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
    let hard = setDificult(d.dificult)
    // let hard = 6;
    let sGame = document.getElementById('screen-game')
    for (let indexI = 0; indexI < hard; indexI++) {
        let trElement = document.createElement('tr')
        trElement.className = 'img-coluns'
        sGame.appendChild(trElement)
        for (let indexJ = 0; indexJ < hard; indexJ++) {
            let tdElement = document.createElement('td')
            tdElement.className = 'td-cells'
            let img = document.createElement('img')
            img.className = 'img-cells'
            img.alt = indexI + ' ' + indexJ
            // img.src = 'assets/gifs/gif-ground/00.gif'
            img.src = getArrayTable(d)[indexJ]
            tdElement.appendChild(img)
            trElement.appendChild(tdElement)
        }

    }
    getArrayTable(d)
}

function setDificult(d) {
    return d + 5
}
function getImage(indexImg) {
    let pathImg = 'assets/gifs/gif-ground/' + '0' + indexImg + '.gif'
    return pathImg
}
function getArrayTable(d) {
    let qntdImg = (setDificult(d.dificult) * setDificult(d.dificult)) / 2
    let imgs = new Array()
    for (let indexI = 0; indexI < qntdImg; indexI++) {
        let value = getImage(indexI)
        imgs.push(value)
    }
    console.log(imgs)
    return imgs
}



