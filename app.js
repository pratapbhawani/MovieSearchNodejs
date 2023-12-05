const express = require('express');        //importing the required files
const request = require('request');         
const app = express();
app.set('view engine', 'ejs');

app.get('/', function(req, res){            //createad the home page rout
    res.render('search');
});

app.get('/results', function(req, res){     //created for the search result page rout
    var query = req.query.search;
    var url = 'https://www.omdbapi.com/?s=' + query + '&apikey=5216b3fb';       //api got from omdb
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){                 //if the requested result success then move forward
            var data = JSON.parse(body)
            res.render('results', {data: data});
        }
    });
});

 app.listen(3000, function(){
     console.log('Movie app started on port: 3000');            //listining to the port ni,ber 3000
 });
