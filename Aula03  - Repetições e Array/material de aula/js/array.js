// var produto1 = "Tenis"
// var produto2 = "Boia"
// var produto3 = "VideoGames"

// ARRAY
var estoqueProdutos = ["Tenis", "Bola", "VideoGame"]
console.log(estoqueProdutos)
// indice
console.log(estoqueProdutos[1])

// metodo
var frutas = Array()
frutas[0] = "Banana"
frutas[1] = "Abacaxi"
frutas[2] = "Laranja"
console.log(frutas)

//Comandos Array
// push - adiciona um elemento na última posição
estoqueProdutos.push("Chocolate")
console.log(estoqueProdutos)
// unshift - adiciona um elemento em primeiro lugar
estoqueProdutos.unshift("Refrigerante")
console.log(estoqueProdutos)
// pop - remover um elemento na última posição
estoqueProdutos.pop()
// shift - remov o primeiro elemenedo de um array
estoqueProdutos.shift()
// splice - (indice. quantos indices, novo elemento) ele age no meio do array
estoqueProdutos.splice(1,0,"Chocolate")
// includes - busca item no array 
console.log(estoqueProdutos.includes("Chocolate"))
// length - quantidade de elementos no array
console.log(`Existem ${estoqueProdutos.length} no estoque`)