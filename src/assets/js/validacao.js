function  vericaSeOChuteEvalido(chute){
    const numero = +chute
    if (chuteForInvalido(numero)){
        console.log('valor invalido')
    }
    if (numeroMaiorMenorValorPermitido(numero)){
        elementoChute.innerHTML+= `<div>FAle um numero entre: ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = `
        <h2>Voce acertou!</h2>
        <h3> O numero secreto era ${numeroSecreto} </h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    }else if(numero > numeroSecreto) {
        elementoChute.innerHTML +=  `<div>O numero secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>` 
    }else {
        elementoChute.innerHTML +=  `<div>O numero secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>` 
    }
}  

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
    elementoChute.innerHTML += ('<div>Valor Invalido</div>')
    return 
}

function numeroMaiorMenorValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', (e)=>{
    if (e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})