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
    }


}