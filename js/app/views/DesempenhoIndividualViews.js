class DesempenhoIndividualViews {
  constructor() {
  }

  static _estruturaTabela(){
    let conteudo = `<table class="table table-bordered table-hover" id="tabela-aluno" > <!-- Tabela Aluno -->
      <thead class="thead-dark" align='center'>
        <tr>
          <th scope="col">MATERIAS</th>
          <th scope="col">1º Ano Fun.</th>
          <th scope="col">2º Ano Fun.</th>
          <th scope="col">3º Ano Fun.</th>
          <th scope="col">4º Ano Fun.</th>
          <th scope="col">5º Ano Fun.</th>
          <th scope="col">6º Ano Fun.</th>
          <th scope="col">7º Ano Fun.</th>
          <th scope="col">8º Ano Fun.</th>
          <th scope="col">9º Ano Fun.</th>
          <th scope="col">1º Ano Med.</th>
          <th scope="col">2º Ano Med.</th>
          <th scope="col">3º Ano Med.</th>
        </tr>
      </thead>
      <tbody id="tabela-desempenho">


      </tbody>
    </table> <!-- Fim Tabela Aluno -->

    <div class="card w-100 my-2"> <!-- card grafico -->
      <div class="card-body">
        <h5 id="nome-matéria" class="card-tilhe">Nome da Matéria</h5>
        <div class="ct-chart ct-menor-sexto" id="grafico-materia"></div><!-- Grafico barra da matéria selecionada -->
      </div>
    </div><!-- Fim card grafico -->

    <div class="card w-100 my-2"> <!-- card grafico -->
      <div class="card-body">
        <h5 class="card-tilhe">Media Geral</h5>
        <div class="ct-chart ct-menor-sexto" id="grafico-geral"></div><!-- Grafico linha da media geral por ano -->
      </div>
    </div><!-- Fim card grafico -->`;

    $('#conteudo-index').append(conteudo);
  }



}//fim class
