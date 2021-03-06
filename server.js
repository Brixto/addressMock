var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.listen(3000, function () {
    console.log('address api listening on port 3000');
});

app.post('/address', function (req, res) {
    let street = req.body.street;
    let postalcode = req.body.postalcode;
    let city = req.body.city;

    let totalCount = count(street) + count(postalcode) + count(city);
    if (totalCount % 2 === 0) {
        req.body.street = req.body.street.concat('diverging');
    }
    req.body.zone = totalCount % 5;
    res.json(req.body);
});

app.get('/address', function(req, res) {
    res.send('<a href="https://github.com/Brixto/addressMock/">API Documentation</a>');
});

function count(str) {
    let count = 0;
    for (var i = 0; i < str.length; i++) {
        count += str.charCodeAt(i);
    }
    return count;
}
