//VARIAVEIS GLOBAIS
var materias = ['Matématica', 'Portugues', 'História', 'Geografia', 'Filosofia', 'Sociologia', 'Ciencias', 'Quimica', 'Fisica', 'Biologia'];
var listaAlunos = [alunoMayki, alunoMonick];
var identificador;
var trGrafico;

$(function () {

});
/*Opção "Alunos Cadastrados"*/
$('#item1').on('click', function(event){
  event.preventDefault();
  $('#item1').addClass('active');
  $('#item2').removeClass('active');
  $('#item3').removeClass('active');
  $('#item4').removeClass('active');
  Help.limpaTela();
  AlunosCadastradosViews._cardsAlunosCadastrados();
  $('.botao-excluir').on('click', AlunosCadastradosController._deletaAluno);
  $('.botao-desempenho').on('click', AlunosCadastradosController._desempenhoIndividual);

});

/*Opção "Cadastrar Aluno"*/
$('#item2').on('click', function(event){
  event.preventDefault();
  $('#item2').addClass('active');
  $('#item1').removeClass('active');
  $('#item3').removeClass('active');
  $('#item4').removeClass('active');
  Help.limpaTela();
  CadastraAlunosViews._criaTabelaCadastro();
  $('#botaoCadastrar').on('click', CadastraAlunoController._criaAluno);
});

/*Opção "Media Geral"*/
$('#item3').on('click', function(event){
  event.preventDefault();
  $('#item3').addClass('active');
  $('#item1').removeClass('active');
  $('#item2').removeClass('active');
  $('#item4').removeClass('active');
  Help.limpaTela();
  MediaGeralViews._graficoGeral();
  MediaGeralController.montaGraficoGeral();
});

/*Opção "Outra Opção"*/
$('#item4').on('click', function(event){
  event.preventDefault();
  $('#item4').addClass('active');
  $('#item1').removeClass('active');
  $('#item2').removeClass('active');
  $('#item3').removeClass('active');
});
