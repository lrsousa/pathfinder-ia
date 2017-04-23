var ponto = function(objeto) {
  return {
    id : objeto.id,
    lat: objeto.lat,
    lng: objeto.lng,
    vizinhos: objeto.vizinhos,
    ativo: true,
    f: 0,
    g: 0,
    h: 0,
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
  listaAberta = [];
  listaFechada = [];

  listaAberta.push(origem);
  while (origem.id != destino.id) {
    listaAberta.sort(comparaDistancia);
    origem = listaAberta.shift();
    listaFechada.push(origem);

    if(origem == null) {
      alert("Impossível achar um caminho!");
      break;
    }

    for (var i = 0; i < origem.vizinhos.length; i++) {
      var pontoI = pontos[origem.vizinhos[i] - 1];
      if(pontoI.ativo && listaFechada.indexOf(pontoI) < 0) {
        if(listaAberta.indexOf(pontoI) < 0) {
          listaAberta.push(pontoI);
          pontoI.pai = origem;
          pontoI.g = pontoI.distanciaGeodesicaDestino(origem) + origem.g;
          pontoI.h = pontoI.distanciaGeodesicaDestino(destino);
          pontoI.f = pontoI.g + pontoI.h;
        } else {
          if(origem.g < pontoI.g) {
            pontoI.pai = origem;
            pontoI.g = pontoI.distanciaGeodesicaDestino(origem) + origem.g;
            pontoI.f = pontoI.g + pontoI.h;
          }
        }
      }
    }
  }
  listaFechada.push(listaAberta.shift());

  var _polyline = []
  var retorno = destino;
  while(retorno != null) {
    _polyline.push({lat: retorno.lat, lng: retorno.lng});
    retorno = retorno.pai;
  }
  var flightPath = new google.maps.Polyline({
    path: _polyline,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 3
  });
  initMap();
  flightPath.setMap(map);
};



var comparaDistancia = function(a, b) {
  return (a.f - b.f);
};
