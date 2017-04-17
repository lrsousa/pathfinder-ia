
var ponto = function(objeto) {
  return {
    id : objeto.id,
    lat: objeto.lat,
    lng: objeto.lng,
    vizinhos: objeto.vizinhos,
    visitado: false,
    ativo: true,
    pai: null,
    distanciaGeodesicaDestino: function(destino) {
        return google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(this.lat, this.lng), new google.maps.LatLng(destino.lat, destino.lng));
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
