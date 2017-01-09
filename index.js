var express = require('express');
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');
var Palindrome = require('./lib/palindrome');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('public', {
    index: 'home.html'
}));

app.post('/is-palindrome', function (req, res) {
    if (req.body.text !== undefined && req.body.text !== "") {
        var palidromeValidator = new Palindrome();
        if (palidromeValidator.isPalindrome(req.body.text)) {
            res.status(200).send('IS A PALINDROME');
        } else {
            res.status(400).send('IS NOT A PALINDROME');
        }
    } else {
        res.status(400).send('IS NOT A PALINDROME');
    }
});

server.listen(3000, function () {
  console.log('App is listening on port 3000!');
});
