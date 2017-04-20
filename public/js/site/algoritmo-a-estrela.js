var ponto = function(objeto) {
  return {
    id : objeto.id,
    lat: objeto.lat,
    lng: objeto.lng,
    vizinhos: objeto.vizinhos,
    visitado: false,
    ativo: true,
    distanciaAcumulada: 0,
    pai: null,
    distanciaGeodesicaDestino: function(d) {
        return google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(this.lat, this.lng), new google.maps.LatLng(d.lat, d.lng));
    },
    print: function(){
      console.log("id: "+ this.id+",  lat é " + this.lat + ", long é " + this.lng);
    }
  };
};

var montarListaDePontos = function(p) {
  var bkpPontos = [];
  for (i = 0; i < p.length; i++) {
    bkpPontos.push(ponto(p[i]));
  }
  return bkpPontos;
};

var Get = function(yourUrl){
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;
};

var listaAberta = [];
var listaFechada = [];

var pathfinder = function() {
  origem.visitado = true;
  listaAberta.push(origem);
  while (origem.id != destino.id) {
    for (var i = 0; i < origem.vizinhos.length; i++) {
      if(pontos[origem.vizinhos[i] - 1].ativo && listaAberta.indexOf(origem.vizinhos[i]) < 0) {
        pontos[origem.vizinhos[i] - 1].pai = origem;
        pontos[origem.vizinhos[i] - 1].distanciaAcumulada = pontos[origem.vizinhos[i] - 1].distanciaGeodesicaDestino(origem) + origem.distanciaAcumulada;
        listaAberta.push(pontos[origem.vizinhos[i] - 1]);
      }
    }
    console.log(listaAberta);
    listaFechada.push(listaAberta.shift());
    listaAberta.sort(comparaDistancia);
    origem = listaAberta.shift();
    listaFechada.push(origem);
  }
  listaFechada.push(listaAberta.shift());
};
// calcular distancia caminhada
// https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=-30.0333198,-51.2315908&destinations=-30.0317965,-51.2313762&mode=walking&key=AIzaSyBrPzOscJfdLUzjF7tBZyFVaQth4sAGUO0

var comparaDistancia = function(a, b) {
  return (a.distanciaAcumulada + a.distanciaGeodesicaDestino(destino)) - (b.distanciaAcumulada + b.distanciaGeodesicaDestino(destino));
};
