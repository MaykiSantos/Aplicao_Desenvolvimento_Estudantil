class CadastraAlunoController {
  constructor() {

  }

static _criaAluno(){
  let criaAluno = new Aluno($('#nome-aluno').val());


  materias.forEach(function(item) {
    let criaMateria = new CriaMateriaModels(item, $('#'+item+'-1AnoFun').val(), $('#'+item+'-2AnoFun').val(), $('#'+item+'-3AnoFun').val(), $('#'+item+'-4AnoFun').val(), $('#'+item+'-5AnoFun').val(), $('#'+item+'-6AnoFun').val(), $('#'+item+'-7AnoFun').val(), $('#'+item+'-8AnoFun').val(), $('#'+item+'-9AnoFun').val(), $('#'+item+'-1AnoMed').val(), $('#'+item+'-2AnoMed').val(), $('#'+item+'-3AnoMed').val());
    criaAluno.adicionaMaterias(criaMateria);

    $('#nome-aluno').val('').focus();
    $('#'+item+'-1AnoFun').val('0');
    $('#'+item+'-2AnoFun').val('0');
    $('#'+item+'-3AnoFun').val('0');
    $('#'+item+'-4AnoFun').val('0');
    $('#'+item+'-5AnoFun').val('0');
    $('#'+item+'-6AnoFun').val('0');
    $('#'+item+'-7AnoFun').val('0');
    $('#'+item+'-8AnoFun').val('0');
    $('#'+item+'-9AnoFun').val('0');
    $('#'+item+'-1AnoMed').val('0');
    $('#'+item+'-2AnoMed').val('0');
    $('#'+item+'-3AnoMed').val('0');

  });
  console.log(criaAluno);
  listaAlunos.push(criaAluno);



}




}//fim class
