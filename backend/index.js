const express = require('express');
const connectToMongo = require('./db');
connectToMongo();


const app = express();
const port = 3001;
app.get('/', (req, res) => {
    res.send('Hello World!')
}
);
app.use(express.json());
app.use('/api/auth', require('./routes/auth'));
app.use('/api/diary', require('./routes/diary'));
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
}
);

