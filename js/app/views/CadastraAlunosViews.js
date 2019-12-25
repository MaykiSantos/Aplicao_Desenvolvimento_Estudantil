class CadastraAlunosViews {
  constructor() {

  }

static _criaTabelaCadastro(){
  let tabelaNovoAluno = `<input id="nome-aluno" class="form-control form-control-lg" type="text" placeholder="Nome do Aluno Aqui!"> <!-- Input nome aluno -->

  <table class="table table-bordered mt-2" id="tabela-aluno" > <!-- Tabela Cadastrar Aluno -->
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
    <tbody id="tabela-cadastro">


    </tbody>
  </table> <!-- Fim Tabela Cadastrar Aluno -->

  <button type="submit" name="button" class="btn btn-primary mb-3 col-5" id="botaoCadastrar">Cadastrar</button> <!-- botão cadastra -->
  <br>
  <br>`;

  $('#conteudo-index').append(tabelaNovoAluno);

  let linhas;
  materias.forEach(function(item){
    let linhaTabela = `<tr>
      <th scope="row">${item}</th>
      <td><input id="${item+'-1AnoFun'}" class="form-control form-control-sm" type="number" value="0" min="0" max="10"></td>
      <td><input id="${item+'-2AnoFun'}" class="form-control form-control-sm" type="number" value="0" min="0" max="10"></td>
      <td><input id="${item+'-3AnoFun'}" class="form-control form-control-sm" type="number" value="0" min="0" max="10"></td>
      <td><input id="${item+'-4AnoFun'}" class="form-control form-control-sm" type="number" value="0" min="0" max="10"></td>
      <td><input id="${item+'-5AnoFun'}" class="form-control form-control-sm" type="number" value="0" min="0" max="10"></td>
      <td><input id="${item+'-6AnoFun'}" class="form-control form-control-sm" type="number" value="0" min="0" max="10"></td>
      <td><input id="${item+'-7AnoFun'}" class="form-control form-control-sm" type="number" value="0" min="0" max="10"></td>
      <td><input id="${item+'-8AnoFun'}" class="form-control form-control-sm" type="number" value="0" min="0" max="10"></td>
      <td><input id="${item+'-9AnoFun'}" class="form-control form-control-sm" type="number" value="0" min="0" max="10"></td>
      <td><input id="${item+'-1AnoMed'}" class="form-control form-control-sm" type="number" value="0" min="0" max="10"></td>
      <td><input id="${item+'-2AnoMed'}" class="form-control form-control-sm" type="number" value="0" min="0" max="10"></td>
      <td><input id="${item+'-3AnoMed'}" class="form-control form-control-sm" type="number" value="0" min="0" max="10"></td>
    </tr>`;


    $('#tabela-cadastro').append(linhaTabela);
  });

}



}
