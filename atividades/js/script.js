confirm("Deseja encerrar sua conta?")
var numClientes = Number(prompt("Digite a quantidade de pessoas na mesa"))
var valorConta = Number(prompt("Digite o valor da conta"))

var contaDividida =  valorConta / numClientes
alert(`O valor final da conta é de R$ ${contaDividida}`)
