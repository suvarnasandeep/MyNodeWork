// /https://www.youtube.com/watch?v=_xKCi5OI_Mg
//https://www.youtube.com/watch?v=CwnViYV4gM0
//https://account.sendinblue.com/advanced/api


//yarv dev

const express = require('express')
const dbConnection = require('./config/db')
const dotEnv = require('dotenv')
const path = require('path')

dotEnv.config()
const PORT = process.env.PORT || 3100
const app = express()

app.use(express.static('public'))
app.use(express.json())

dbConnection();
//template engine
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

//Routes
app.use('/api/files', require('./routes/files'))
app.use('/files', require('./routes/show'))
app.use('/files/download', require('./routes/download'))


app.listen(PORT, ()=>{
    console.log(`server is running on ${process.env.APP_BASE_URL}`)
})