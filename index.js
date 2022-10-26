const express = require('express')
const app = express();

const dataRouter = require('./Routes/data');

const cors = require('cors')

app.use(cors);

app.use('/api',dataRouter)

app.listen(process.env.port || 8080, () => {
    console.log('server started');
});