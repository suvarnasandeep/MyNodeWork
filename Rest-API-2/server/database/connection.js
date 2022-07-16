const mongoose = require('mongoose')
const dotenv = require('dotenv');

dotenv.config({path:'config.env'})
const DB_URL = process.env.DB_URL

// Database connection// Database connection
const connectDB = () =>{
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
}

module.exports=connectDB;
