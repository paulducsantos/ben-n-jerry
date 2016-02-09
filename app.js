var express = require('express');
var exphbs  = require('express-handlebars');
const PORT = 2424;

var app = express();
 
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var icecreams = [ {name: 'vanilla', price: 10, awesomeness: 3}, {name: 'chocolate', price: 4, awesomeness: 8}, {name: 'banana', price: 1, awesomeness: 1}, {name: 'greentea', price: 5, awesomeness: 7}, {name: 'jawbreakers', price: 6, awesomeness: 2}, ]; 

app.get('/', function (req, res) {
    res.render('home');
});
 
app.listen(PORT, function() {
  console.log('Server listening on %s', PORT);
});