var express = require('express');
var app = express();

// będziemy używać Puga jako kreatora widoków
app.set('view engine', 'pug');
// widoki bedziemy trzymac w katalogu views
app.set('views','./views');

app.use('/store', function(req, res, next){
  console.log('jestes w middleware');
  next();
});

app.get('/', function(req, res) {
  res.send('Hello world!');
});

app.get('/store', function(req, res){
  res.send('To jest sklep');
});

app.get('/first-template', function(req, res) {
  res.render('first-template');
});

app.get('/dynamic', function(req,res){
  res.render('dynamic', {
    user: {name: "Johana", age: "20"}
  });
});

app.get('/dynamic-view', function(req, res){
  res.render('dynamic-view', {
    name: "Moja dynamiczna strona",
    url: "http://www.google.com"
  });
});

app.get('/content', function(req, res){
  res.render('content');
});

app.listen(3000);
app.use(function(req, res, next){
  res.status(400).send('error 404');
});
