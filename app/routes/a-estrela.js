module.exports = function(app) {
  app.get('/a-estrela', function(req, res) {
    res.render('aestrela/a-estrela');
  });

  app.get('/', function(req, res) {
    res.render('index');
  });

  app.get('/pontosIniciais', function(req, res) {
    var pontos = [
      ['ponto 1 ', -30.030937, -51.238051, 1],
      ['ponto 2 ', -30.031764, -51.237695, 2],
      ['ponto 3 ', -30.032525, -51.237354, 3],
      ['ponto 4 ', -30.033491, -51.236948, 4],
      ['ponto 5 ', -30.034320, -51.236565, 5],
      ['ponto 6 ', -30.034811, -51.236425, 6],
      ['ponto 7 ', -30.035358, -51.236348, 7],
      ['ponto 8 ', -30.036037, -51.236259, 8],
      ['ponto 9 ', -30.036077, -51.235517, 9],
      ['ponto 10', -30.035494, -51.235329, 10],
      ['ponto 11', -30.034834, -51.235262, 11],
      ['ponto 12', -30.034058, -51.235514, 12],
      ['ponto 13', -30.034012, -51.235360, 13],
      ['ponto 14', -30.033143, -51.235741, 14],
      ['ponto 15', -30.032118, -51.236217, 15],
      ['ponto 16', -30.031394, -51.236537, 16],
      ['ponto 17', -30.030570, -51.236919, 17],
      ['ponto 18', -30.030401, -51.236476, 18],
      ['ponto 19', -30.031230, -51.236099, 19],
      ['ponto 20', -30.031956, -51.235755, 20],
      ['ponto 21', -30.030186, -51.235883, 21],
      ['ponto 22', -30.031010, -51.235495, 22],
      ['ponto 23', -30.031763, -51.235162, 23],
      ['ponto 24', -30.032794, -51.234697, 24],
      ['ponto 25', -30.033736, -51.234286, 25],
      ['ponto 26', -30.034888, -51.233759, 26],
      ['ponto 27', -30.035700, -51.233750, 27],
      ['ponto 28', -30.036430, -51.233772, 28],
      ['ponto 29', -30.036825, -51.231926, 29],
      ['ponto 30', -30.035976, -51.231824, 30],
      ['ponto 31', -30.035090, -51.231744, 31],
      ['ponto 32', -30.033340, -51.231575, 32],
      ['ponto 33', -30.033327, -51.232711, 33],
      ['ponto 34', -30.032317, -51.233047, 34],
      ['ponto 35', -30.031153, -51.233394, 35],
      ['ponto 36', -30.030383, -51.233647, 36],
      ['ponto 37', -30.029565, -51.234014, 37],
      ['ponto 38', -30.029076, -51.232618, 38],
      ['ponto 39', -30.029904, -51.232243, 39],
      ['ponto 40', -30.030634, -51.231893, 40],
      ['ponto 41', -30.031819, -51.231349, 41]
    ];

    res.format({
        json: function(){
          res.json(pontos);
        }
    });
  });
}
