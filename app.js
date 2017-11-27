var express = require('express');
var todoController = require('./controller/todoController');

var app = express();

app.set('view engine', 'ejs');

app.use(express.static('./public'));

// fire controllers
todoController(app);

app.listen(3000);
console.log('listening to port 3000');