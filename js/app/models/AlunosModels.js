class Aluno {
  constructor(nomeAluno) {
    this.nome= nomeAluno;
    this.materias = [];
  }

  adicionaMaterias(materia){
    this.materias.push(materia);
  }

}//fim class
