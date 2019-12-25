//VARIAVEIS GLOBAIS
var materias = ['Matématica', 'Portugues', 'História', 'Geografia', 'Filosofia', 'Sociologia', 'Ciencias', 'Quimica', 'Fisica', 'Biologia'];
var alunoMayki = {
  "nome": "Mayki",
  "materias":[
    {
    "Materia":"Matématica",
    "Ano1Fund": "0",
    "Ano1Med": "7.38",
    "Ano2Fund": "9.0",
    "Ano2Med": "7.40",
    "Ano3Fund": "9.5",
    "Ano3Med": "7.0",
    "Ano4Fund": "8.0",
    "Ano5Fund": "8.5",
    "Ano6Fund": "7.0",
    "Ano7Fund": "8.0",
    "Ano8Fund": "7.5",
    "Ano9Fund": "8.5"
    },
    {
    "Materia": "Portugues",
    "Ano1Fund": "0",
    "Ano1Med": "6.5",
    "Ano2Fund": "8.0",
    "Ano2Med": "6.65",
    "Ano3Fund": "9.5",
    "Ano3Med": "6.70",
    "Ano4Fund": "7.5",
    "Ano5Fund": "9.0",
    "Ano6Fund": "7.0",
    "Ano7Fund": "7.0",
    "Ano8Fund": "7.5",
    "Ano9Fund": "7.0"
    },
    {
    "Materia": "História",
    "Ano1Fund": "0",
    "Ano1Med": "7.12",
    "Ano2Fund": "9.0",
    "Ano2Med": "6.82",
    "Ano3Fund": "9.5",
    "Ano3Med": "6.32",
    "Ano4Fund": "8.0",
    "Ano5Fund": "8.0",
    "Ano6Fund": "7.0",
    "Ano7Fund": "7.0",
    "Ano8Fund": "9.0",
    "Ano9Fund": "7.5"
    },
    {
    "Materia": "Geografia",
    "Ano1Fund": "0",
    "Ano1Med": "7.38",
    "Ano2Fund": "8.0",
    "Ano2Med": "7.10",
    "Ano3Fund": "10.0",
    "Ano3Med": "5.65",
    "Ano4Fund": "8.0",
    "Ano5Fund": "8.0",
    "Ano6Fund": "7.0",
    "Ano7Fund": "8.0",
    "Ano8Fund": "8.0",
    "Ano9Fund": "7.5"
    },
    {
    "Materia": "Filosofia",
    "Ano1Fund": "0",
    "Ano1Med": "6.75",
    "Ano2Fund": "0",
    "Ano2Med": "7.52",
    "Ano3Fund": "0",
    "Ano3Med": "7.05",
    "Ano4Fund": "0",
    "Ano5Fund": "0",
    "Ano6Fund": "0",
    "Ano7Fund": "0",
    "Ano8Fund": "0",
    "Ano9Fund": "0"
    },
    {
    "Materia": "Sociologia",
    "Ano1Fund": "0",
    "Ano1Med": "5.88",
    "Ano2Fund": "0",
    "Ano2Med": "7.48",
    "Ano3Fund": "0",
    "Ano3Med": "7.02",
    "Ano4Fund": "0",
    "Ano5Fund": "0",
    "Ano6Fund": "0",
    "Ano7Fund": "0",
    "Ano8Fund": "0",
    "Ano9Fund": "0"
    },
    {
    "Materia": "Ciencias",
    "Ano1Fund": "0",
    "Ano1Med": "0",
    "Ano2Fund": "8.0",
    "Ano2Med": "0",
    "Ano3Fund": "9.5",
    "Ano3Med": "0",
    "Ano4Fund": "8.0",
    "Ano5Fund": "9.0",
    "Ano6Fund": "7.5",
    "Ano7Fund": "8.0",
    "Ano8Fund": "9.0",
    "Ano9Fund": "8.0"
    },
    {
    "Materia": "Quimica",
    "Ano1Fund": "0",
    "Ano1Med": "8.25",
    "Ano2Fund": "0",
    "Ano2Med": "6.28",
    "Ano3Fund": "0",
    "Ano3Med": "7.02",
    "Ano4Fund": "0",
    "Ano5Fund": "0",
    "Ano6Fund": "0",
    "Ano7Fund": "0",
    "Ano8Fund": "0",
    "Ano9Fund": "0"
    },
    {
    "Materia": "Fisica",
    "Ano1Fund": "0",
    "Ano1Med": "6.50",
    "Ano2Fund": "0",
    "Ano2Med": "6.65",
    "Ano3Fund": "0",
    "Ano3Med": "6.80",
    "Ano4Fund": "0",
    "Ano5Fund": "0",
    "Ano6Fund": "0",
    "Ano7Fund": "0",
    "Ano8Fund": "0",
    "Ano9Fund": "0"
    },
    {
    "Materia": "Biologia",
    "Ano1Fund": "0",
    "Ano1Med": "8.0",
    "Ano2Fund": "0",
    "Ano2Med": "8.15",
    "Ano3Fund": "0",
    "Ano3Med": "7.15",
    "Ano4Fund": "0",
    "Ano5Fund": "0",
    "Ano6Fund": "0",
    "Ano7Fund": "0",
    "Ano8Fund": "0",
    "Ano9Fund": "0"
    }
  ]
};
var listaAlunos = [alunoMayki];
var identificador;
var trGrafico;

$(function () {

});

$('#item1').on('click', function(){
  $('#item1').addClass('active');
  $('#item2').removeClass('active');
  $('#item3').removeClass('active');
  $('#item4').removeClass('active');
  Help.limpaTela();
  AlunosCadastradosViews._cardsAlunosCadastrados();
  $('.botao-excluir').on('click', AlunosCadastradosController._deletaAluno);
  $('.botao-desempenho').on('click', AlunosCadastradosController._desempenhoIndividual);

});


$('#item2').on('click', function(){
  $('#item2').addClass('active');
  $('#item1').removeClass('active');
  $('#item3').removeClass('active');
  $('#item4').removeClass('active');
  Help.limpaTela();
  CadastraAlunosViews._criaTabelaCadastro();
  $('#botaoCadastrar').on('click', CadastraAlunoController._criaAluno);
});


$('#item3').on('click', function(){
  $('#item3').addClass('active');
  $('#item1').removeClass('active');
  $('#item2').removeClass('active');
  $('#item4').removeClass('active');
  Help.limpaTela();
  MediaGeralViews._graficoGeral();
  MediaGeralController.montaGraficoGeral();
});

$('#item4').on('click', function(){
  $('#item4').addClass('active');
  $('#item1').removeClass('active');
  $('#item2').removeClass('active');
  $('#item3').removeClass('active');
});
