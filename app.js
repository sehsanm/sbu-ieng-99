var cowsay = require("cowsay");
const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.header("Content-Type", 'text/plain')
  res.send(cowsay.say({
	text : "Shahid beheshti University",
	e : "oO",
	T : "U "
    }))
})
console.log('Hello'); 
app.listen(3000 , function() {
    console.log("App is ready Now!")
});
