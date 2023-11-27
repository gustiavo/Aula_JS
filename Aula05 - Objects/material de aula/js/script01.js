class Aluno{
    constructor(valNome,valIdade, valTurma){
        this.nome = valNome
        this.idade = valIdade
        this.turma = valTurma

    }
   
}

class Qualificacao{
    constructor(valNome,valDuracao,valTipo){
    this.nome = valNome
    this.duracao = valDuracao
    this.tipo = valTipo
    }
}

var curso1 = new Qualificacao("FRONT", 220, "Tecnologia")
var curso2 = new Qualificacao("Java", 400, "Tecnologia")

var aluno1 = new Aluno("Leandro", 25, curso1)
var aluno2 = new Aluno("Alice", 20, curso2)

// atributo privativo = apenas o objeto em si poderá mudar seus valores, não aceitando em reatribuição
