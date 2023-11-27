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
    constructor(marca, modelo, ano, cor, veloMax, veloAtual){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano 
        this.cor = cor 
        this.veloMax = veloMax
        this.velocidadeAtual = veloAtual
    }
}