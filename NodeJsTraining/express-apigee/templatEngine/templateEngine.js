var express = require ('express');


var app = express();

app.set('view engine', 'ejs');
//app.use('/',express.static('views'));


app.get('/',function(req,res){
 res.sendFile(__dirname + '/formGet.html');


//querystrings
 app.get('/query',function(req,res){
   console.log(req.query);
   res.send(req.query);
 });

 //res.render('profile',{qs: req.query}); we can give this qs in that file
});

app.get('/profile/:name',function(req,res){
//res.send('you are viewing the profile of' + req.params.name );// withou ejs
//we use render for view an ejs files
//res.render('prof'); // calling view file with ejs
//res.render('profile'); // calling view file with ejs
//res.send(req.params.name);
var info ={age:23, job:'software eng', hobbies: ['driving','reading','listening music']};
res.render('profile', {person: req.params.name, data:info});
//res.render('profile', {person: req.params.name});
});
app.get('/prof/:name',function(req,res){
res.render('prof', {person: req.params.name});
})
app.listen(3000);
 console.log("Example app listening at 3000");
