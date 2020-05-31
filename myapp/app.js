const express = require('express')
const app = express()
const mariadb = require('mariadb')
const mysql = require('mysql')
var bodyParser = require('body-parser')

var jsonParser = bodyParser.json();

var allowCrossDomain = function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cache-Control");

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};
app.use(allowCrossDomain);

const connection = mariadb.createConnection({
    host: 'localhost',
    user: 'angularloopers',
    password: 'AngularProject2',
    database: 'angularloopers',
    multipleStatements: true
});

//get all title articles
app.get('/articles', (raq, res) => {
    console.log("get all articles");
    connection.then(con => {
        con.query("SELECT * FROM article").then((rows) => {
            res.json(rows);
        });
    });
});

//get article by Id
app.get('/articles/:id', (raq, res) => {
    console.log("get article by id");
    connection.then(con => {
        con.query("SELECT * FROM article WHERE id=" + raq.params.id).then((rows) => {
            res.json(rows);
        });
    });
});


//delete article by Id
app.delete('/articles/:id', (raq, res) => {
    console.log("delete article by id");
    connection.then(con => {
        con.query("DELETE FROM article WHERE id=" + raq.params.id, (err, rows, fields) => {
            if (err)
                console.error(err.message);
            else
                res.send("Deleted success!");
        });
    });
});

//Insert article
app.post('/articles', jsonParser, (req, res) => {
    let arti = req.body;
    console.log("body = " + req.body.ID);
    console.log("Add an article");
    connection.then(con => {
        con.query("INSERT INTO article value (?, ?, ?, ?)", [arti.ID, arti.Titre, arti.Contenu, arti.UtilisateurID], (err, rows, fields) => {
            if (err)
                console.error(err.message);
            else {
                console.log("OK");
                res.send("OK");
            }
        });
    });
});

app.post('/articles/update', jsonParser, (req, res) => {
    let arti = req.body;
    console.log("Update an article");
    connection.then(con => {
        con.query("UPDATE article SET Titre = ?, Contenu = ?, UtilisateurID = ? WHERE id = ?", [arti.Titre, arti.Contenu, arti.UtilisateurID, arti.ID], (err, rows, fields) => {
            if (err)
                console.error(err.message);
            else {
                console.log("OK");
                res.send("OK");
            }
        });
        res.send("OK");
    });
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});