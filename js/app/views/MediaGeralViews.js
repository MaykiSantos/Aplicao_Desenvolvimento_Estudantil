class MediaGeralViews {
  constructor() {

  }

  static _graficoGeral(){
    let grafico = `<div class="card w-100 my-2"> <!-- card grafico -->
      <div class="card-body">
        <h4 class="card-tilhe">DESEMPENHO GERAL DOS ALUNOS POR MATÉRIA</h4>
        <div class="ct-chart ct-menor-sexto" id="grafico-geral-materias"></div><!-- Grafico barra da media geral por materia(considera todos os alunos) -->
      </div>
    </div><!-- Fim card grafico -->`;
    $('#conteudo-index').append(grafico);

  }







}//fim class
