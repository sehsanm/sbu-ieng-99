var cowsay = require("cowsay");
const express = require('express')
const app = express()
 
app.get('/test' , function(req, res){

  let s = '<html>' ; 
  s += '<body>' ; 
  s += '<h1>Salam</h1>' ; 
  s+= '</body></html>' ;

  res.send(s); 

});
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
