function Aluno(nome,nota){
    this.nome = nome
    this.nota = nota
}

let lista_alunos = [
    new Aluno('Rogerio', 1),
    new Aluno('Tulio', 3),
    new Aluno('Motanha', 9),
    new Aluno('Roberswaldo', 10),
    new Aluno('Cidnei', 2),
]

function nota_aluno(alunos){
    let aluno_passou_ano = []

    for(i=0; i < alunos.length; i++){
        if (alunos[i].nota > 6){
            aluno_passou_ano.push(alunos[i])
        }
    }
    return aluno_passou_ano
}

console.log(nota_aluno(lista_alunos))