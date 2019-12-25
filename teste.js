
function montaGrafico() {
  new Chartist.Bar('#grafico-geral-materias', {
    labels: ['Matématica', 'Portugues', 'História', 'Geografia', 'Filosofia', 'Sociologia', 'Ciencias', 'Quimica', 'Fisica', 'Biologia'],
    series: [8.3, 7.9, 9.1, 8.5, 7.6, 8.6, 8, 7.6, 7.9, 8.7]
  }, {
    distributeSeries: true

  });
}
