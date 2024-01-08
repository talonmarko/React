const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
 res.send('Hello World!');
});

app.listen(3000, () => {
 console.log('Server started on port 3000');
});

const mysql = require('mysql');
const db = mysql.createConnection({
    host: "172.16.0.26",
    user: "ruokailu_user",
    password: "PTt]r[2Ji(IIeysT",
    database: "ruokailu"
});

db.connect((err) => {
 if (err) throw err;
 console.log('Connected to database');
});

app.get('/api/data', (req, res) => {
    let sql = "SELECT COUNT(request_date) FROM lounas";
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send({ count: result[0].count });
    });
 });