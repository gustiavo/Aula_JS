// tabuada do 8
var oito = 8
var tabuada = 1
var resultado = +1

do{
    var resultado = oito * tabuada
    console.log(` ${oito} x ${tabuada} = ${resultado} `)
    tabuada++
    
}while( tabuada <= 10)


                    // correção
    for(var cont = 1; cont <= 10; cont++){
        console.log(`8 x ${cont} = ${cont * 8}`)

    }                   