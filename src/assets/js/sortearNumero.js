
const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNUmeroAletorio()

function gerarNUmeroAletorio(){
   return parseInt(Math.random()*maiorValor + 1)

}


const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor