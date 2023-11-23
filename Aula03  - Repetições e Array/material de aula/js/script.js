// Repetições
// While (Verifica e depois faz)
var contador = 0

// enquanto (condicao) faca

// contador + 1
// fimEnquanto

while (contador <= 10){
    console.log(contador)
    contador++
    // contador = contador + 1
}
// Do While (faz e verifica)
// repita
// 
// contador
// ate(condição)

var cont = 0
do{
    console.log(`FIZ ${cont} vezes`)
    cont++
}while(cont <= 10)

// FOR
// PARA (VAR, CONDIÇÃO,CONTROLADOR)


// fimPara
// Não use const em for
// ; é obrigatório no for para pooder separar as unidades
for(let controlador = 1; controlador <= 10; controlador++){
    // no FOR não precisa concatenar com `${} `
    console.log(controlador+" For é legal")
}

// For earch
console.log("elementos")
var elementos = ["elemento1", "elemento2", "elemento3"]
// function pseudofunction, anonima, function está oculta
elementos.forEach((cadaElementos) => {
    console.log(" - "+cadaElementos)
    

})