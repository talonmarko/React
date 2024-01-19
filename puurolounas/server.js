// const mysql = require('mysql');
// const express = require('express');
// const app = express();
// const port = 3001;

// const con = mysql.createConnection({
//  host: "172.16.0.26",
//  user: "ruokailu_user",
//  password: "PTt]r[2Ji(IIeysT",
//  database: "ruokailu"
// });

// con.connect(function(err) {
//  if (err) throw err;
//  console.log("Connected to database!");
// });

// app.get('/api/lounas', (req, res) => {
//   const query = 'SELECT COUNT(*) AS total FROM lounas';
//   con.query(query, function (err, result) {
//   if (err) throw err;
//   res.json(result.total);
//   });
//  });

// app.listen(port, () => {
//  console.log(`Server is running on port ${port}`);
// });

const mysql = require('mysql');
const express = require('express');
const app = express();
const port = 3001;

const con = mysql.createConnection({
 host: "172.16.0.26",
 user: "ruokailu_user",
 password: "PTt]r[2Ji(IIeysT",
 database: "ruokailu"
});

con.connect(function(err) {
 if (err) throw err;
 console.log("Connected to database!");

 const query = 'SELECT COUNT(*) as Total FROM lounas';
 con.query(query, function (err, result) {
 if (err) throw err;
 console.log(result);
 });
});

app.listen(port, () => {
 console.log(`Server is running on port ${port}`);
});