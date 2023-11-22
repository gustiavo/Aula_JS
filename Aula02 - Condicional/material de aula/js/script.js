//Operadores lógicos : (comparar)
// > Maior que
// < Menor que
// != Diferente 
// == Compara valor / = Recebe / ===Compara valor e tipo
//  >= Maior ou igual 
// <= Menor ou igual

// Operadores Alternários
// && E (Duas condições deverão ser igual em resultado)
// || OU (Se uma das condições forem verdadeiras será executado)
// ! NÂO (Se não for a condição)

//Condicionais
// IF (SE SENAO)
if(true){
    console.log("Sou verdadeiro")
}else{
    console.log("Sou falso")
}

//Verificar idade 
var idade = Number(prompt("Qual é a sua idade?"))

if(idade >= 18){
    alert("Seja bem vindo!")
}else{
    if(idade == 0){
        alert("Idade invalida, tente novamente!")
        location.reaload()
    }else{
        alert("Você não tem autorização para acessar este site!")
        location.href = "https://www.google.com.br/?hl=pt-BR"
    }
    // location.href = "https://www.google.com.br/?hl=pt-BR"
    //location.reload()
}
// condição ? bloco1 : bloco2 (if ternario)
// x > 10 ? alert("legal") : ("maneiro")
