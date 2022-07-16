//https://www.youtube.com/watch?v=eYVGoXPq2RA
const express = require('express');
const mongoose = require('mongoose')

const DB_URL='mongodb://localhost:27017/rest-api-1?authSource=admin&w=1';

const app = express();

// Database connection
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('DB connected...');
});

app.use(express.json())
const alentRoute = require('./routes/aliens');

app.use('/aliens',alentRoute);

app.listen(9000, () => {
    console.log("Listening on 9000");
})