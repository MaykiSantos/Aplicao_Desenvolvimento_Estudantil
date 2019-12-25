class AlunosCadastradosController {
  constructor() {
  }

static _deletaAluno(){

  identificador = $(this).parent().parent().find('#identificador').text()
  console.log(identificador);
  listaAlunos.splice(identificador,1);
  Help.limpaTela();
  AlunosCadastradosViews._cardsAlunosCadastrados();
  $('.botao-excluir').on('click', AlunosCadastradosController._deletaAluno);
}

static _desempenhoIndividual(){
  identificador = $(this).parent().parent().find('#identificador').text()
  Help.limpaTela();
  DesempenhoIndividualViews._estruturaTabela();
  DesempenhoIndividualController.montaTabelaDesempenho();
  $('tr').on('click', DesempenhoIndividualController.montaGraficoDesempenho);

  console.log(listaAlunos[identificador].materias);


}

}//fim class
