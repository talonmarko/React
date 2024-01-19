const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
 res.send('Hello World!');
});

app.listen(5000, () => {
 console.log('Server started on port 5000');
});

const mysql = require('mysql2');
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "reactsqltest"
});

db.connect((err) => {
 if (err) throw err;
 console.log('Connected to database');
});

app.get('/api/data', (req, res) => {
    let sql = "SELECT COUNT(*) FROM users";
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send({ count: result[0].count });
    });
 });