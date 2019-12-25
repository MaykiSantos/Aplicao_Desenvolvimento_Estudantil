class MediaGeralController {
  constructor() {
  }

  static montaGraficoGeral(){

    let listaMediaGeral = [0,0,0,0,0,0,0,0,0,0];
    listaAlunos.forEach(function (itemAluno) {
      itemAluno.materias.forEach(function (item, inddice) {
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
        let guardar = listaMediaGeral[inddice];
        listaMediaGeral.splice(indice, 1);
        listaMediaGeral.splice(indice, 0, ((total/dividir)+guardar))
        //listaMediaGeral[inddice].push((total/dividir)+listaMediaGeral[inddice]);
        //console.log(listaMediaIndividual);

      });



    });



    new Chartist.Bar('#grafico-geral', {
    labels: [...materias],
    series: [...listaMediaGeral]
  }, {
    high: 10,
    low: 0,
    height: '350px',
    distributeSeries: true
  });




  }






}//fim class
