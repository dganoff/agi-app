var express = require("express"),
    app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 9000;

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname));

// all front-end routes to handle Angular requests:
app.get("/", function(req, res) {
  res.sendFile("index.html");
});

app.listen(port, function() {
    console.log("Our app is running on http://localhost:" + port);
});