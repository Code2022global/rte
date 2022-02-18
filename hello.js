mymodule = require('./mymodule')
const express = require('express');
const bodyParser =require('body-parser')
var app = express();
app.use(express.static('public'));

app.get('/',function(req,res){
    res.send("get / requets");    
})
app.get('/index',function(req,res){
    res.sendFile(__dirname+'/index.html');
})

app.get('/process_get', function (req, res) {

    // Chuan bi output trong dinh dang JSON
    response = {
        first_name:req.query.first_name,
        last_name:req.query.last_name,
        valuecong: mymodule.cong(req.query.first_name,req.query.last_name),
        valuetru: mymodule.tru(req.query.first_name,req.query.last_name)
 
    };
    console.log(response);
    res.end(JSON.stringify(response));
 })
// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

 app.post('/process_post',urlencodedParser, function (req, res) {

    // Chuan bi output trong dinh dang JSON
    response = {
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        value: mymodule.nhan(req.body.first_name,req.body.last_name)
    };
    console.log(response);
    res.end(JSON.stringify(response));
 })
 
const port=3000
var server = app.listen(port, function(){
      var host = server.address().address
      var port = server.address().port

  console.log("Ung dung Node.js dang lang nghe tai dia chi: http://%s:%s", host, port)

})
console.log("windows -express")

var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/Nodejs", function (err, db) {
    if (err)
        throw err;
    db.collection('Persons', function (err, collection) {
        
        collection.insert({ id: 1, firstName: 'Steve', lastName: 'Jobs' });
        collection.insert({ id: 2, firstName: 'Bill', lastName: 'Gates' });
        collection.insert({ id: 3, firstName: 'James', lastName: 'Bond' });
        
        

        db.collection('Persons').count(function (err, count) {
            if (err) throw err;
            
            console.log('Total Rows: ' + count);
        });
    });
                
});
