alert("Calculadora de soma")
var numero1 = Number(prompt("Digite o primeiro número")) 
var numero2 = Number(prompt("Digite o segundo número"))

// Float para números com casas decimais
// var soma = parseFloat(numero1) + parseFloat(numero2)
// Int para intero
// var soma = parseInt(numero1) + parseInt(numero2)
var soma = numero1 + numero2
alert(`O resultado da operação é ${soma}.`)