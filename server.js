var express = require('express');
var app = express();
var bodyParser = require('body-parser');   //add this line
var requestApi = require('request')
app.use(express.static('node_modules'));
app.use(express.static('public'))
 
app.use(bodyParser.urlencoded({ extended: false }));   //add this line
app.use(bodyParser.json());  //add this line


var fs = require('fs');

var data = { name: "Hadar", job: "queen" };

fs.writeFile('test.txt', JSON.stringify(data), function (err) {
  if (err) throw err;
  else console.log('Data saved to file!');
});

fs.readFile("test.txt", 'utf8', function(err, data) {
    if (err) throw err;
    console.log(data);
  });

  app.get("/file", function(req, res){
    fs.readFile("test.txt", 'utf8', function(err, data) {
      if (err) throw err;
      console.log(data);
      res.send(data);
    });
   })

  
  app.listen(3000);