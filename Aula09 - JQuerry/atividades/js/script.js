$("#btnCalcular").on("click", function(){
    let numeroEscolhido = Number($("#numeroEscolhido").val())
    for(let i = 1; i <= 10; i++){
        document.querySelector("#resultadoCalculo").innerHTML += `${numeroEscolhido} x ${i} = ${i * numeroEscolhido} <br>`
    }

})