// var filmes = ["O pequenino", "Click", "Superbad", "Projeto X", "Guerra dos Mundos", "Avatar"]
// console.log(filmes)
                // correção
var vingadores = ["Titulo: Vingadores","Descrição: lorem"]
var filmes = [vingadores,"frozen","frozen","frozen","Shrek","Godzilla","Harry Potter"]
                // uma forma
// for(var contador = 0; contador < filmes.length; contador++){
//     console.log(filmes[contador])
// }   

                // Outra forma
    filmes.forEach( (cadaFilme) => {
        console.log(cadaFilme)
    } );    