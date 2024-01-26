const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/lounas', {useNewUrlParser: true, useUnifiedTopology: true});

app.get('/api/count', async (req, res) => {
 const count = await mongoose.connection.db.collection("ruokailu").find({
    request_date: {
        "$gte": ("2023-12-14 07:00:00.000"),
        "$lte": ("2023-12-14 09:45:00.000")
    }
}).count();
 res.send({ count });
});

const PORT = 3000;
app.listen(PORT, () => {
 console.log(`Server listening on port ${PORT}`);
});
