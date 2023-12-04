// Instalação
// VISITE https://jquery.com/download/
// clicar na opção "Download the uncompressed, development jQuery 3.7.1"
// Aberto o arquivo, aperte com o botão direito e salvar página como.. e salve em um local de sua preferência!


// Seletor JQUERY = $("# ou . ou a prórpia tag")
var titulo = $("#tituloDaPagina").text("JQUERY AULA")
console.log(titulo)

// -------------------------------------------
// Sem JQUERRY

// var paragrafo = document.querySelector("#textoDaPagina")

// paragrafo.addEventListener("mouseover", consoleListar)

// function consoleListar(){
//     console.log("Este é o texto do site")
// }


            // Com JQUERRY
var paragrafo = $("#textoDaPagina").on("mouseover", function (){
    console.log("Este é o texto do site")
})

// ----------------------------------------

//comportamento
// JQUERY tem capacidade de avaliar valores não definidos e vazios
var usuario = "Victor"
var usuarioIndefinido = undefined

var usuarioResultado = $("#testeIndefinido").text(undefined)

//algoritmo contagem de caracteres
var blocoDeTexto = $("#blocoDeTexto").on("input", function(){
    let blocoDeTextoValue = $("#blocoDeTexto").val()
    let resposta = $("#numCaracteres")
    
    var contagem =  blocoDeTextoValue.length
    resposta.text(contagem)
})
