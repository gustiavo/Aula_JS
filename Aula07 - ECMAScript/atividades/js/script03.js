const verificarPromise = new Promise((resolve, reject) => {
    let nome = "ADM"
    let senha = "ADM"

    if( nome == "ADM" && senha == "ADM"){
        resolve("Seja bem vindo administrador")

    }else{
        reject("O usuário não é ADM! Faça login de maneira alternativa!")
    }
})

verificarPromise.then((x) =>{  
    alert("Usuário encontrado! Seja bem vindo administrador")
})
verificarPromise.catch((x) =>{  
    if(nome != "ADM")
    alert("Erro! Usuário não encontrado")
})