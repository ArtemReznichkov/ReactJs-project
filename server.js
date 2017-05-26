var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.use(express.static(__dirname + '/client'));

app.all("/*", function(req, res, next) {
        res.sendFile("index.html", { root: __dirname + "/client" });
    });

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port 3000!')
})
