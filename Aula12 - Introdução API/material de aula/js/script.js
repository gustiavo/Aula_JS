//API = Application Programing Interface
//Fetch = Busca a aplicação
// Json = Maneira de transmitir dados do servidor para lado cliente
//Then = Acessamos outro escopo da aplicação (pegou api.entao...)

var btnCep = document.querySelector('#btnCep')

btnCep.addEventListener('focusOut', consultar)
function consultar(){
    var cep = Number(document.querySelector('#cep').value)
    if(cep.length < 8 || cep.length > 9){
        alert('Erro! CEP INVÁLIDO')
    }else{

        fetch (`https://viacep.com.br/ws/${cep}/json/ `).then(res => 
        {return res.json()
        }).then(dados => {
            let resposta = document.querySelector('#resposta')
            resposta.innerHTML += `
            <h1> Informações sobre o cep </h1>
            CEP: ${dados.cep} <br>
            BAIRRO: ${(dados.bairro)} <br>
            LOGRADOURO: ${(dados.logradouro)} <br>
            `
    
            console.log(dados)
        })
        
    }

    //"promise" console.log(Api) 
}