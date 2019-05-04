function startGame() {
    data = getConfigGame()
    setScreenGame(data)
        // showScreenGame()
        // gameRunning()
    isPoint()
        // restart()

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

function makeAPoint(table) {
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

function girarTela(event1, event2) {
    //let cell2 = event.srcElement
    // console.log(event1.target.offsetParent.children[0])
    // console.log(event2.target.offsetParent.children[0])
    // event1.target.offsetParent.children[0].style.display = 'block'
    // event2.target.offsetParent.children[0].style.display = 'block'
    // console.log(event)
    // event1.srcElement.style.display = 'none'
    // event1.srcElement.style.display = 'none'
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
    img.src = 'assets/bgcells.gif'
    img.className = 'imgBg-cells'
        // img.style.maxWidth = '60px'
        // img.style.maxHeigth = '60px'
    img.style.margin = '3px'
    img.style.marginLeft = '30px'
        //img.style.display = ''
    img.style.borderRadius = '5px'

}

function setDificult(d) {
    return d + 3
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
    for (let indexI = 0; indexI < qntdImg; indexI++) {
        let value = getImage(indexI)
        imgs.push(value)
    }
    console.log(imgs)
    return imgs
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