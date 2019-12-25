class DesempenhoIndividualController {
  constructor() {
  }

  static montaTabelaDesempenho(){

    listaAlunos[identificador].materias.forEach(function (item) {
      let linhaTabelaDesesempenho = `<tr>
        <th scope="row">${item.Materia}</th>
        <td>${item.Ano1Fund}</td>
        <td>${item.Ano2Fund}</td>
        <td>${item.Ano3Fund}</td>
        <td>${item.Ano4Fund}</td>
        <td>${item.Ano5Fund}</td>
        <td>${item.Ano6Fund}</td>
        <td>${item.Ano7Fund}</td>
        <td>${item.Ano8Fund}</td>
        <td>${item.Ano9Fund}</td>
        <td>${item.Ano1Med}</td>
        <td>${item.Ano2Med}</td>
        <td>${item.Ano3Med}</td>
        </tr>`;

      $('#tabela-desempenho').append(linhaTabelaDesesempenho);
    });

    let aluno = listaAlunos[identificador];
    let listaMediaIndividual = [];
    aluno.materias.forEach(function (item) {
      let total = 0;
      let dividir = 0;

      if (item.Ano1Fund != 0) {
        total+= Math.floor(item.Ano1Fund);
        dividir++;
      }
      if (item.Ano2Fund != 0) {
        total+= Math.floor(item.Ano2Fund);

        dividir++;
      }
      if (item.Ano3Fund != 0) {
        total+= Math.floor(item.Ano3Fund);
        dividir++;
      }
      if (item.Ano4Fund != 0) {
        total+= Math.floor(item.Ano4Fund);
        dividir++;
      }
      if (item.Ano5Fund != 0) {
        total+= Math.floor(item.Ano5Fund);
        dividir++;
      }
      if (item.Ano6Fund != 0) {
        total+= Math.floor(item.Ano6Fund);
        dividir++;
      }
      if (item.Ano7Fund != 0) {
        total+= Math.floor(item.Ano7Fund);
        dividir++;
      }
      if (item.Ano8Fund != 0) {
        total+= Math.floor(item.Ano8Fund);
        dividir++;
      }
      if (item.Ano9Fund != 0) {
        total+= Math.floor(item.Ano9Fund);
        dividir++;
      }
      if (item.Ano1Med != 0) {
        total+= Math.floor(item.Ano1Med);
        dividir++;
      }
      if (item.Ano2Med != 0) {
        total+= Math.floor(item.Ano2Med);
        dividir++;
      }
      if (item.Ano3Med != 0) {
        total+= Math.floor(item.Ano3Med);
        dividir++;
      }

      listaMediaIndividual.push(total/dividir);
      console.log(listaMediaIndividual);

    })

    new Chartist.Bar('#grafico-geral', {
    labels: [...materias],
    series: [...listaMediaIndividual]
  }, {
    high: 10,
    low: 0,
    height: '350px',
    distributeSeries: true
  });

  }

static montaGraficoDesempenho(){
  trGrafico = $(this);
  //console.log(typeof(trGrafico));
  let listatd = trGrafico.find('td');
  console.log(listatd[2].innerHTML);
  let materiath = trGrafico.find('th').text();
  $("#nome-matéria").text(materiath);

  new Chartist.Line('#grafico-materia', {
  labels: ['1º Ano Fun.','2º Ano Fun.','3º Ano Fun.','4º Ano Fun.','5º Ano Fun.','6º Ano Fun.','7º Ano Fun.','8º Ano Fun.', '9º Ano Fun.', '1º Ano Med.', '2º Ano Med.', '3º Ano Med.'],
  series: [
    [listatd[0].innerHTML,listatd[1].innerHTML,listatd[2].innerHTML,listatd[3].innerHTML,listatd[4].innerHTML,listatd[5].innerHTML,listatd[6].innerHTML,listatd[7].innerHTML, listatd[8].innerHTML, listatd[9].innerHTML, listatd[10].innerHTML, listatd[11].innerHTML]
  ]
  }, {

    high: 10,
    low: 0,
    height: '350px',
    showArea: true
  });


}

}//fim class
