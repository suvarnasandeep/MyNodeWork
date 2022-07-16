const mongoose = require('mongoose')


function connectDb () {
    // Database connection
//const url = 'mongodb://localhost/file-share'
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Connection failed...')
});

}


module.exports = connectDb