// faça uma página de cadastramento de filmes onde o usuario possa salvar um filme 
// e suas informações como nome, descrição,data, diretor e categoria e liste ela de 
// alguma forma em algum elemento HTML!

class Filme{
    constructor(nome, descricao, data, diretor, categoria){
        this.nome = nome
        this.descricao = descricao
        this.data = data
        this.diretor = diretor  
        this.categoria = categoria
    }

}
const btnFilmes = document.querySelector("#btnFilmes")
const btnListar = document.querySelector("#btnListar")
var filme = []

btnFilmes.addEventListener("click", criarFilme)
btnListar.addEventListener("click", listar)



function criarFilme(){
    let nomeInput = document.querySelector("#filme").value
    let descricaoInput = document.querySelector("#descricao").value
    let dataInput = document.querySelector("#data").value
    let diretorInput = document.querySelector("#diretor").value
    let categoriaInput = document.querySelector("#categoria").value
    let resposta = document.querySelector("#resposta")
    

    filme.push(new Filme(nomeInput, descricaoInput,dataInput,diretorInput, categoriaInput))
    

    resposta.innerHTML = `<div class="post"><h3> ${filme.nome} </h3>
     <h3> ${filme.descricao} </h3> <h3>Ano: ${filme.data} </h3> 
     <h3> ${filme.diretor} </h3>
      <h3> ${filme.categoria}</h3></div>
    `

}
function listar(){
    let divResposta = document.querySelector("#listar")

    divResposta.innerHTML = ""

    filme.forEach((elemento) => {divResposta.innerHTML += `  <div class="posd"><h3> ${elemento.nome} </h3>
    <h3> ${elemento.descricao} </h3> <h3>Ano: ${elemento.data} </h3> 
    <h3> ${elemento.diretor} </h3>
     <h3> ${elemento.categoria}</h3></div>
    
    `; 

}
,)}