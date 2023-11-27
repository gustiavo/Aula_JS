// var textInput =  document.getElementById("textInput")
// textInput.addEventListener("focusin", function(){
//     textInput.style.backgroundColor = "yellow"
// })

// textInput.addEventListener("focusout", function(){
//     textInput.style.backgroundColor = "white"
// })



//pegar input
var input = document.querySelector("#textInput")
// add evento foco e perder foco
input.addEventListener("focus", mudaCor)
input.addEventListener("blur", mudaCorVerifica)
//fazer o input ficar amarelo quando selecionar
function mudaCor(){
    var mensagem = document.querySelector("#mensagem")
    input.style.backgroundColor = "yellow"
    mensagem.innerHTML = "Digite uma senha com mais de 3 caracteres "
}
function mudaCorVerifica(){
    let inputValor = input.value.length
    if(inputValor < 3){
        input.style.backgroundColor = "red"
        mensagem.innerHTML = "Digite uma senha válida!"

    }else{
        input.style.backgroundColor = "green"
        mensagem.innerHTML = "Senha atinge os requisitos"
    }
}
//pegar a quantidade de caracteres
//verificiar se tem 3 caracteres ou mais para verde
//verificiar se menos que a 3 menos para vermelho

var input = document.querySelector("#textInput")
var mensagem = document.querySelector("#mensagem")