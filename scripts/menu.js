function ganhou() {
    let array = document.getElementsByClassName('img-cells')
    let cont = 0;
    for (let indexI = 0; indexI < array.length; indexI++) {
        if (array[indexI].style.display == 'none') {
            cont++
        }
    }
    if (cont == 0) {
        return true
    }
}

function verificacaoGanhar() {
    let array = document.getElementsByClassName('img-cells')
    let cont = 0;

    for (let indexI = 0; indexI < array.length; indexI++) {
        if (array[indexI].style.display == 'none') {
            console.log('voce ainda n ganhou')
            cont++
        }
    }
    if (cont == 0) {
        console.log('jogo terminou!!')
        alert('Jogo terminou!!')
        showScreenEnd()
        return true
    }

}

function showScreenEnd() {

    let box = document.getElementsByClassName('menu')[0]
    console.log(box.style.display = 'none')
    let box2 = document.getElementById('screen-game')
    box2.style.display = 'none'
    let restart = document.getElementById('restart')
    restart.style.display = 'block'


}

function restart() {
    location.reload();

}