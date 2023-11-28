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

// class Carro{
//     constructor(marca, modelo, ano, cor, veloMax, veloAtual){
//         this.marca = marca
//         this.modelo = modelo
//         this.ano = ano 
//         this.cor = cor 
//         this.veloMax = veloMax
//         this.velocidadeAtual = veloAtual
//     }
// }

var carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 1997,
    cor: "branco",
    velocidadeMaxima: 250,
    velocidadeAtual: 0,

    acelerar(velocidade) {
        if (this.velocidadeAtual + velocidade <= this.velocidadeMaxima) {
            this.velocidadeAtual += velocidade;
            console.log("Acelerando. Velocidade atual: " + this.velocidadeAtual + " km/h");
        } else {
            console.log("Velocidade máxima atingida. Não é possível acelerar mais.");
        }
    }
};

console.log("Detalhes do carro:");
console.log("Marca: " + carro.marca);
console.log("Modelo: " + carro.modelo);
console.log("Ano: " + carro.ano);
console.log("Cor: " + carro.cor);
console.log("Velocidade Máxima: " + carro.velocidadeMaxima + " km/h");
console.log("Velocidade Atual: " + carro.velocidadeAtual + " km/h");

carro.acelerar(50); 
carro.acelerar(170);