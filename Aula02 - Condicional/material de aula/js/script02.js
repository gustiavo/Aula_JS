// Case
// escolha variavel
//     caso isso
//         isso
//         fimcaso
//     caso...
// fimescolha

var num1 = Number(prompt("Digite o primeiro número"))
var operador = prompt("Digite o operador")
var num2 = Number(prompt("Digite o segundo número"))

switch(operador){
    case "+":
        var resultado = num1 + num2
        alert(`O resultado da operação é ${resultado}!`)

var novoCalculo = confirm("Deseja fazer um novo calculo")
if(novoCalculo == true){
    location.reload()

}
        
    break
    case "-":
            var resultado = num1 - num2
            alert(`O resultado da operação é ${resultado}!`)

var novoCalculo = confirm("Deseja fazer um novo calculo")
if(novoCalculo == true){
    location.reload()

}
    break
    case "*":
            var resultado = num1 * num2
            alert(`O resultado da operação é ${resultado}!`)

var novoCalculo = confirm("Deseja fazer um novo calculo")
if(novoCalculo == true){
    location.reload()

}
    break
    case "/":
            var resultado = num1 / num2
            alert(`O resultado da operação é ${resultado}!`)

var novoCalculo = confirm("Deseja fazer um novo calculo")
if(novoCalculo == true){
    location.reload()

}
    break

    default:
        alert("Operador inválido! Tente novamente")
        location.reload()
        break    

}
















