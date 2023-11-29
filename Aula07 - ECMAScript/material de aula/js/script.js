//replace / replaceAll
var frase = "Olá mundo, o mundo é muito legal"
console.log(frase)

console.log(frase.replace("mundo", "bacana"))
console.log(frase.replaceAll("mundo", "bacana"))

//setAttribute
document.querySelector("span").setAttribute("style", "color: magenta;")

//class list (para gerenciar uma classe)
// document.querySelector("#classlist").classList.remove("claro")
// document.querySelector("#classlist").classList.add("claro")
var elemento = document.querySelector("#classlist")
// contains "se contem a classe(tal) faça:"
//toggle "troca de classe"
if(elemento.classList.contains("claro")){
    // elemento.classList.toggle("escuro")
    elemento.classList.replace("claro","escuro")
}

//index of / includes
var frutas = ["Morango","Banana","Laranja",'Uva']

// includes -> true e false
console.log(frutas.includes("Morango"))
if(frutas.indexOf("Abacaxi" == false)){
    console.log("Não achei")
}
// indexOf -> o valor indice do array (caso não exista: "-1")
console.log(frutas.indexOf("Abacaxi"))

if(frutas.indexOf("Abacaxi" == -1)){
    console.log("Não achei")
}

//set timeout padrã em "ms"
function msg(){
    return new Promise((resolve) =>{
        setTimeout(() => {
            console.log("Bonjour")
        }, 1000)
        resolve()
    })
  
}
async function carregando(){
  console.log("Iniciou")
    await msg()
    console.log("Seja bem vindo")

} 


   