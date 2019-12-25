class AlunosCadastradosViews {
  constructor() {

  }

  static _cardsAlunosCadastrados(){
    //let listaAlunos = ['Mayki','Andre','Penelope','Irlandia'];
    let cardsHTML = `<div id="div-cards" class="row"> <!-- Alunos Cadastrados -->
    </div> <!-- Fim Alunos Cadastrados -->`;

    $('#conteudo-index').append(cardsHTML);

    listaAlunos.forEach(function(item, indice){
      let cardAluno = `<div class="card w-25"><!-- card do aluno -->
        <img class="card-img-top" src="https://cdn.icon-icons.com/icons2/1804/PNG/512/iconfinder-499-student-education-graduate-learning-4212915_114945.png" alt="Imagem de capa do card">
        <div class="card-body">
          <h5 class="card-title">${item.nome}</h5>
          <p class="card-text">Identificador: <strong id="identificador">${indice}</strong></p>
        </div>
        <div class="card-footer" align='center'>
          <a href="#" class="btn btn-primary botao-desempenho">Desempenho</a>
          <a href="#" class="btn btn-primary botao-excluir">Excluir</a>
        </div>
      </div> <!-- Fim card do aluno -->`;
      $('#div-cards').append(cardAluno);

    });


  }







}//fim class
