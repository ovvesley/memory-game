function startGame() {
    data = getConfigGame()
    setScreenGame(data)
        // showScreenGame()

    isPoint()
    let interval = addTime()
}

function addTime() {
    let cont;
    let interval = setInterval(() => {
        console.log(cont)
        let p = document.getElementById('point').children[0]
        let tmp = parseInt(p.textContent)
        tmp++;
        p.textContent = tmp
        if (ganhou()) {
            clearInterval(interval)
            console.log('parou')
        }

    }, 1000)
}





function isPoint() {

    let imgCells = document.getElementsByClassName('img-cells')
    let imgBgCells = document.getElementsByClassName('imgBg-cells')
    for (indexI = 0; indexI < imgCells.length; indexI++) {
        imgBgCells[indexI].addEventListener('click', (event) => {
            selectImg(event)
        })
    }

}

function isIdentic(img1, img2) {
    if (img1.src == img2.src)
        console.log('iguais')
    else
        console.log('diferente')
}

function makeAPoint() {
    let imgCells = document.getElementsByClassName('img-cells')
    let img;

    let jogadas = new Array();
    for (let indexI = 0; indexI < imgCells.length; indexI++) {
        if (imgCells[indexI].style.display != 'none' && imgCells[indexI].alt != 'ok') {
            //console.log(imgCells[indexI])
            jogadas.push(imgCells[indexI])
                //console.log(jogadas)
            if (jogadas.length == 2) {
                console.log('jogada == 2')
                if (isPoiint(jogadas)) {
                    console.log('pontoo')
                    jogadas[0].alt = 'ok'
                    jogadas[1].alt = 'ok'
                    addPoint()

                    verificacaoGanhar()
                } else {
                    console.log('n foi ponto')
                    setTimeout(() => {
                        jogadas[0].nextSibling.style.display = 'block'
                        jogadas[0].style.display = 'none'
                            //console.log(jogadas[0].nextSibling)
                        jogadas[1].nextSibling.style.display = 'block'
                        jogadas[1].style.display = 'none'
                        jogadas.splice(0, 2)
                        console.log(jogadas)
                    }, 600)


                }
            }
        }
    }
}

function addPoint() {
    soundCoins.stop()
    soundCoins.play()

}

function isPoiint(array) {
    if (array[0].src == array[1].src)
        return true
    else
        return false
}

function selectImg(event) {
    // console.log(event)
    event.srcElement.previousSibling.style.display = 'block'
    event.srcElement.style.display = 'none'
    makeAPoint()
    setTimeout(() => {
        // event.srcElement.previousSibling.style.display = 'none'
        // event.srcElement.style.display = 'block'

    }, 2000)





}


function getConfigGame() {
    return dataLogin
}

function setScreenGame(d) {
    let hard = setDificult(d.dificult)
    let sGame = document.getElementById('screen-game')
    let arrayTable = getArrayTable(d)
    console.log(shuffle(arrayTable))
    let indexSrc = 0
    for (let indexI = 0; indexI < hard; indexI++) {
        let trElement = document.createElement('tr')
        trElement.className = 'img-coluns'
        sGame.appendChild(trElement)
        for (let indexJ = 0; indexJ < hard; indexJ++) {
            let tdElement = document.createElement('td')
            tdElement.className = 'td-cells'
            let img = document.createElement('img')
            let imgBg = document.createElement('img')
            img.className = 'img-cells'
            setBgCells(imgBg)
            img.alt = indexI + ' ' + indexJ
            img.src = arrayTable[indexSrc]
            img.style.display = 'none'
            tdElement.appendChild(img)
            tdElement.appendChild(imgBg)
            trElement.appendChild(tdElement)
            indexSrc++
        }
    }

}

function setBgCells(img) {
    if (dataLogin.theme == 'theme00') {
        img.src = 'assets/bgcells4.gif'
    } else {
        img.src = 'assets/bgcells5.gif'
    }
    img.className = 'imgBg-cells'
        // img.style.maxWidth = '60px'
        // img.style.maxHeigth = '60px'
    img.style.margin = '3px'
    img.style.marginLeft = '30px'
        //img.style.display = ''
    img.style.borderRadius = '5px'

}

function setDificult(d) {
    if (d == 0)
        return 2
    if (d == 1)
        return 4
    if (d == 2)
        return 6
}

function getImageScene1(indexImg) {
    let pathImg = 'assets/gifs/gif-ground/scene-1/' + '0' + indexImg + '.gif'
    return pathImg
}

function getImageScene2(indexImg) {
    let pathImg = 'assets/gifs/gif-ground/scene-2/' + '0' + indexImg + '.jpg'
    return pathImg
}

function createArrayTableScene1(d) {
    let qntdImg = (setDificult(d.dificult) * setDificult(d.dificult)) / 2
    let imgs = new Array()
    for (let indexI = 0; indexI < qntdImg; indexI++) {
        let value = getImageScene1(indexI)
        imgs.push(value)
    }
    for (let indexI = 0; indexI < qntdImg; indexI++) {
        let value = getImageScene1(indexI)
        imgs.push(value)
    }
    console.log(imgs)
    return imgs
}

function createArrayTableScene2(d) {
    let qntdImg = (setDificult(d.dificult) * setDificult(d.dificult)) / 2
    let imgs = new Array()
    for (let indexI = 0; indexI < qntdImg; indexI++) {
        let value = getImageScene2(indexI)
        imgs.push(value)
    }
    for (let indexI = 0; indexI < qntdImg; indexI++) {
        let value = getImageScene2(indexI)
        imgs.push(value)
    }
    console.log(imgs)
    return imgs
}

function getArrayTable(d) {
    // let qntdImg = (setDificult(d.dificult) * setDificult(d.dificult)) / 2
    // let imgs = new Array()
    // for (let indexI = 0; indexI < qntdImg; indexI++) {
    //     let value = getImageScene1(indexI)
    //     imgs.push(value)
    // }
    // for (let indexI = 0; indexI < qntdImg; indexI++) {
    //     let value = getImageScene1(indexI)
    //     imgs.push(value)
    // }
    // console.log(imgs)
    // return imgs
    if (d.theme == 'theme00')
        return createArrayTableScene1(d)
    else
        return createArrayTableScene2(d)
}

function shuffle(array) {
    let m = array.length,
        t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}