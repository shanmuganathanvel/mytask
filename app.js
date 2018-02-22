const express = require('express')
const app = express();
var path = require('path');
const MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var url = "mongodb://ec2-54-191-37-68.us-west-2.compute.amazonaws.com/";
 
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("idiots");
  dbo.collection("Anjali").findOne({}, function(err, result) {
    if (err) throw err;
	console.log("result is here");
    console.log(result);
    db.close();
  });
});
app.use(express.static(path.join(__dirname, 'dist')));

//app.get('/', (req, res) => res.send('Hello World!'))
app.get('/hi', (req, res) => res.send('Hello World! hiiii'))
app.get('/second', (req, res) => res.send('Hello World! <hr/>second'))

app.listen(8081, () => console.log('Example app listening on port 8081!'))