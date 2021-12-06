const express = require("express");
const app = express();

const server = app.listen(3000, () => {
  console.log("Start Server : localhost:3000");
});

app.set("views", __dirname + "/views");
app.set("View Engine", "ejs");
app.engine("html", require("ejs").renderFile);

// route, routing
app.get("/", function (req, res) {
  res.render("index.html");
});

app.get("/about", function (req, res) {
  res.send("about");
});

// var mysql = require('mysql');
// const { blob } = require('stream/consumers');
// var pool = mysql.createPool({
//     connectionLimit : 10,
//     host : 'example.org',
//     user : 'bob',
//     password : 'secret',
//     database : 'my_db'
// })

// app.get('/db', function (req, res) {
//     if (err) throw err // not Connected!

//     // Use the connection
//     connection.query('SELECT something FROM sometable', function (error, results, fields) {
//         res.send(JSON.stringify(results))

//         // When done with the connection, release it
//         connection.release()

//         // Handle error after the release
//         if (error) throw error

//         // Don't use the connection here, it has been returned to the pool
//     })
// })
