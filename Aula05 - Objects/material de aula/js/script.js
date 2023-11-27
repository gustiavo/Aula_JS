// var clienteNome = "Leonardo"
// var clienteNome = 0
// var clienteCpf = 999999999
// var clienteAgencia = "001"
// var clienteConta= "123231321"
// var clienteDataDeNascimento= "11/11/11"

// var cliente1 = ["Nome = Leonardo", "Saldo = 99999"]

class Cliente{
    nome
    dataDeNascimento
    cpf
    conta
    agencia
    saldo
    sacar(valor){
        // saldo -= valor
        if(this.saldo >= valor){
            this.saldo = this.saldo - valor
        return valor;
    }else{
        return "Operação não autorizada! Tá quebrado hein!"
    }   
}
depositar(valor){
    if(valor > 0){
        this.saldo = this.saldo + valor
        return "Valor depositidado R$ "+valor
    }else{
        return "Operação não autorizada! Deposite um valor maior que 0"
    }
}
consultarSaldo(){
    return "O saldo da conta é de: R$ " +this.saldo
}
}

var cliente1 = new Cliente()
cliente1.nome = "Leonardo"
cliente1.clienteDataDeNascimento = "11/11/11"
cliente1.clienteCpf = "999999999"
cliente1.clienteAgencia = "001"
cliente1.clienteConta = "123231321"
cliente1.clienteSaldo = "0"

var cliente2 = new Cliente()