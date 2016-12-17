/**
 * Created by amis67 on 12/17/2016.
 */
// server.js

    // set up ========================
var express  = require('express');
var app      = express();                               // create our app w/ express
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)

// configuration =================


app.use(express.static(__dirname));                 // set the static files location /public/img will be /img for users
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

app.get('*', function(req, res) {
    res.sendfile('./index.html'); // load the single view file (angular will handle the page changes on the front-end)
});
// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");
