// Caixas de texto  

// alert("Hello World!")
// confirm("Bom dia! O dia está bom?")
// com input
// prompt("Qual é a sua idade?")
console.log("Olha que legal")

// variaveis (recebem valores)
// var variavel, é sobrescrevível. Escopo global
var nome = "Gustavo"

// const constante, não sobrescrevível. Escopo global
const pi = "3,14"

// let "temporária", é sobrescrevível. Escopo local

function letTeste(){
    let numero = 0
    console.log(numero)
}

const name = prompt("Qual é seu nome?")
alert("Seja bem vindo(a), " + name) 
// comando abaixo utiliza crase 
// $() serve para chamar uma variável e não é considerado como texto
alert(`${name}, aproveite a estadia`)

// Tipos de valores
// STRING
var texto = "Olá mundo"

// NUMBER
var numeroBacana = 10

// BOOLEAN
var ligado = true

// OBJETO
var carro = [atributo = "algo"]

// Array
var compras = ["Açúcar","Arroz"]