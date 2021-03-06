var express = require('express');
var exphbs  = require('express-handlebars');
const PORT = 2424;

var app = express();
 
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var icecreams = [ {name: 'vanilla', price: 10, awesomeness: 3}, {name: 'chocolate', price: 4, awesomeness: 8}, {name: 'banana', price: 1, awesomeness: 1}, {name: 'greentea', price: 5, awesomeness: 7}, {name: 'jawbreakers', price: 6, awesomeness: 2}, ]; 

app.get('/', function (req, res) {
    res.send('ICE CREAM!');
    // res.render('home');
});



app.get('/:name', function (req, res) {
    function getIndexOfIcecreams(value, index, array) {
      if(req.params.name === icecreams[index].name) {
        console.log(index);
        return true;
      }
    }
    var indexVal = icecreams.findIndex(getIndexOfIcecreams);
    var data = icecreams[indexVal];
    res.render('flavor', data);
});

// app.get('/chocolate', function (req, res) {

//     var data = icecreams[1];
//     res.render('flavor', data);
//     // res.render('home');
// });

// app.get('/banana', function (req, res) {

//     var data = icecreams[2];
//     res.render('flavor', data);
//     // res.render('home');
// });

// app.get('/greentea', function (req, res) {

//     var data = icecreams[3];
//     res.render('flavor', data);
//     // res.render('home');
// });

// app.get('/jawbreakers', function (req, res) {

//     var data = icecreams[4];
//     res.render('flavor', data);
//     // res.render('home');
// });
 
app.listen(PORT, function() {
  console.log('Server listening on %s', PORT);
});