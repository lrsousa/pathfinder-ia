module.exports = function(app) {
  app.get('/a-estrela', function(req, res) {
    res.render('aestrela/a-estrela');
  });

  app.get('/', function(req, res) {
    res.render('index');
  });
}
