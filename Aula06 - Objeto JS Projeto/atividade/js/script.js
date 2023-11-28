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
var btnFilmes = document.querySelector("#btnFilmes")
btnFilmes.addEventListener("click", criarFilme)
function criarFilme(){
    let nomeInput = document.querySelector("#filme").value
    let descricaoInput = document.querySelector("#descricao").value
    let dataInput = document.querySelector("#data").value
    let diretorInput = document.querySelector("#diretor").value
    let categoriaInput = document.querySelector("#categoria").value
    let resposta = document.querySelector("#resposta")

    var filme = new Filme(nomeInput, descricaoInput,dataInput,diretorInput, categoriaInput)

    resposta.innerHTML = `<div class="post"><h3> ${filme.nome} </h3>
     <h3> ${filme.descricao} </h3> <h3>Ano: ${filme.data} </h3> 
     <h3> ${filme.diretor} </h3>
      <h3> ${filme.categoria}</h3></div>
    `

}