var cep = document.querySelector('#cep')


cep.addEventListener('focusOut', consultar)
function consultar(){
    var cep = Number(document.querySelector('#cep').value)
    if(cep.length < 8 || cep.length > 9){
        alert('Erro! CEP INVÁLIDO')
    }else{

        fetch (`https://viacep.com.br/ws/${cep}/json/ `).then(res => 
        {return res.json()
        }).then(dados => {
            bairro = document.querySelector('#bairro').value
            bairro.innerHTML = `
          ${(dados)}
            `
    
            console.log(dados)
        })
        
    }}