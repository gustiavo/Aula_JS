// confirm("Deseja encerrar sua conta?")
// var numClientes = Number(prompt("Digite a quantidade de pessoas na mesa"))
// var valorConta = Number(prompt("Digite o valor da conta"))

// var contaDividida =  valorConta / numClientes
// alert(`O valor final da conta é de R$ ${contaDividida}`)

function calculeConta(numClientes, valorConta){
    alert ("Calcula conta")
    
    let contaDividida =  valorConta / numClientes
    
    alert(`O valor final da conta é de R$ ${contaDividida}`)
    
}
    var numClientes = Number(prompt("Digite a quantidade de pessoas na mesa"))
    var valorConta = Number(prompt("Digite o valor da conta"))
    calculeConta(numClientes, valorConta)
