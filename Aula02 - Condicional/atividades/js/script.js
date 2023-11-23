var idade = Number(prompt("Qual é a sua idade?"))

if(idade < 0){
    alert("Idade inválida! Digite novamente")
    location.reload()

}else{
if(idade < 15){
    alert("Criança")
    
}else{
    if(idade < 30){
        alert("Jovem")
    }else{
        if(idade < 60){
            alert("Adulto")
        }else{
            if(idade >=60){
                alert("Idoso")
            }
        }   


    }
}
}
confirm("Deseja refazer o procedimento?")
location.reload()