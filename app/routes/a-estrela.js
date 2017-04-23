module.exports = function(app) {
  app.get('/a-estrela', function(req, res) {
    res.render('aestrela/a-estrela');
  });

  app.get('/', function(req, res) {
    res.render('index');
  });

  app.get('/pontosIniciais', function(req, res) {

    var pontos = [
      {id:1,	lat:-30.030937, lng:-51.238051,	vizinhos:[2, 17], visitado: false, pai: null},
      {id:2,	lat:-30.031764, lng:-51.237695, vizinhos:[3, 16], visitado: false, pai: null},
      {id:3,	lat:-30.032525, lng:-51.237354, vizinhos:[2, 4, 15], visitado: false, pai: null},
      {id:4,	lat:-30.033491, lng:-51.236948, vizinhos:[3, 5, 14], visitado: false, pai: null},
      {id:5,	lat:-30.034320, lng:-51.236565, vizinhos:[4, 6, 12], visitado: false, pai: null},
      {id:6,	lat:-30.034811, lng:-51.236425, vizinhos:[5, 7, 11], visitado: false, pai: null},
      {id:7,	lat:-30.035358, lng:-51.236348, vizinhos:[6, 8, 10], visitado: false, pai: null},
      {id:8,	lat:-30.036037, lng:-51.236259, vizinhos:[7, 9], visitado: false, pai: null},
      {id:9,	lat:-30.036077, lng:-51.235517, vizinhos:[8, 10, 28], visitado: false, pai: null},
      {id:10,	lat:-30.035494, lng:-51.235329,	vizinhos:[7,9, 11, 27], visitado: false, pai: null},
      {id:11,	lat:-30.034834, lng:-51.235262,	vizinhos:[6, 10, 12, 26], visitado: false, pai: null},
      {id:12,	lat:-30.034058, lng:-51.235514,	vizinhos:[5, 11,13], visitado: false, pai: null},
      {id:13,	lat:-30.034012, lng:-51.235360,	vizinhos:[12, 14, 25], visitado: false, pai: null},
      {id:14,	lat:-30.033143, lng:-51.235741,	vizinhos:[4, 13, 15, 24], visitado: false, pai: null},
      {id:15,	lat:-30.032118, lng:-51.236217,	vizinhos:[3, 14, 16, 20], visitado: false, pai: null},
      {id:16,	lat:-30.031394, lng:-51.236537,	vizinhos:[2, 15, 17, 19], visitado: false, pai: null},
      {id:17,	lat:-30.030570, lng:-51.236919,	vizinhos:[1, 16, 18], visitado: false, pai: null},
      {id:18,	lat:-30.030401, lng:-51.236476,	vizinhos:[17, 19, 21], visitado: false, pai: null},
      {id:19,	lat:-30.031230, lng:-51.236099,	vizinhos:[16, 18, 20, 22], visitado: false, pai: null},
      {id:20,	lat:-30.031956, lng:-51.235755,	vizinhos:[15, 19, 23], visitado: false, pai: null},
      {id:21,	lat:-30.030186, lng:-51.235883,	vizinhos:[18, 22, 37], visitado: false, pai: null},
      {id:22,	lat:-30.031010, lng:-51.235495,	vizinhos:[19, 21, 23, 36], visitado: false, pai: null},
      {id:23,	lat:-30.031763, lng:-51.235162,	vizinhos:[20, 22, 24, 35], visitado: false, pai: null},
      {id:24,	lat:-30.032794, lng:-51.234697,	vizinhos:[14, 23, 25, 34], visitado: false, pai: null},
      {id:25,	lat:-30.033736, lng:-51.234286,	vizinhos:[13, 24, 26, 33], visitado: false, pai: null},
      {id:26,	lat:-30.034888, lng:-51.233759,	vizinhos:[11, 25, 27, 31], visitado: false, pai: null},
      {id:27,	lat:-30.035700, lng:-51.233750,	vizinhos:[10, 26, 28, 30], visitado: false, pai: null},
      {id:28,	lat:-30.036430, lng:-51.233772,	vizinhos:[9, 27, 29], visitado: false, pai: null},
      {id:29,	lat:-30.036825, lng:-51.231926,	vizinhos:[28, 30], visitado: false, pai: null},
      {id:30,	lat:-30.035976, lng:-51.231824,	vizinhos:[27, 29, 31], visitado: false, pai: null},
      {id:31,	lat:-30.035090, lng:-51.231744,	vizinhos:[26, 30, 32], visitado: false, pai: null},
      {id:32,	lat:-30.033340, lng:-51.231575,	vizinhos:[31, 33], visitado: false, pai: null},
      {id:33,	lat:-30.033327, lng:-51.232711,	vizinhos:[25, 32, 34], visitado: false, pai: null},
      {id:34,	lat:-30.032317, lng:-51.233047,	vizinhos:[24, 33, 35, 41], visitado: false, pai: null},
      {id:35,	lat:-30.031153, lng:-51.233394,	vizinhos:[23, 34, 36, 40], visitado: false, pai: null},
      {id:36,	lat:-30.030383, lng:-51.233647,	vizinhos:[22, 35, 37, 39], visitado: false, pai: null},
      {id:37,	lat:-30.029565, lng:-51.234014,	vizinhos:[21, 36, 38], visitado: false, pai: null},
      {id:38,	lat:-30.029076, lng:-51.232618,	vizinhos:[37, 39], visitado: false, pai: null},
      {id:39,	lat:-30.029904, lng:-51.232243,	vizinhos:[36, 38, 40], visitado: false, pai: null},
      {id:40,	lat:-30.030634, lng:-51.231893,	vizinhos:[35, 39, 41], visitado: false, pai: null},
      {id:41,	lat:-30.031819, lng:-51.231349,	vizinhos:[34, 40], visitado: false, pai: null}
    ];

    res.format({
        json: function(){
          res.json(pontos);
        }
    });
  });
}
