// marca: string
// modelo: string
// ano: número
// cor: string
// velocidadeMaxima: número
// velocidadeAtual: número (inicialmente 0)
// Em
// seguida, crie um método chamado "acelerar" que receba um número como
// argumento e aumente a velocidade atual do carro por esse número.
// Certifique-se de que a velocidade atual não ultrapasse a velocidade
// máxima do carro.

class Carro{
    constructor(marca, modelo, ano, cor, veloMax){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano 
        this.cor = cor 
        this.veloMax = veloMax
        this.veloAtual = 0
    }
    acelerar(velocidadeAcelerada){
        //velocidade atual + valor 
        if(velocidadeAcelerada <= 0) {
            return("Velocidade invalida! Coloque uma aceleração maior que 0")
        }else{
            if(velocidadeAcelerada + this.veloAtual > this.veloMax){
                return("velocidade não permitida! Velocidade máxima ultapassada")

            }else{
                this.veloAtual += velocidadeAcelerada
                return "Você acelerou " +velocidadeAcelerada + "km/h "
            }
        }
    }
}
var btnCarro = document.querySelector("#btnCarro")
btnCarro.addEventListener('click', criarCarro)
function criarCarro(){
    let marcaInput = document.querySelector("#marca").value
    let modeloInput = document.querySelector("#modelo").value
    let anoInput = document.querySelector("#ano").value
    let corInput = document.querySelector("#cor").value
    let veloMaxInput = document.querySelector("#veloMax").value
    let resposta = document.querySelector("#resposta")
    
    var carro = new Carro(marcaInput, modeloInput, anoInput, corInput, veloMaxInput)

    resposta.innerHTML = `<div class="post"><h3> ${carro.marca} </h3> <h3> ${carro.modelo} </h3> <h3>Ano: ${carro.ano} </h3> <h3 style="color: ${carro.cor};"> COR </h3> <h3> ${carro.veloMax}km/h </h3></div>`

}


