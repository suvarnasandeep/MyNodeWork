const axios = require('axios')

exports.homeRoute = (req, res) => {
    //make get request to /api/users
    axios.get('http://localhost:3001/api/users')
    .then((response) =>{
        console.log(response.data)
        res.render('index',{users: response.data});
    })
    .catch(err=>{
        res.send(500)
    })
    
}

exports.add_user = (req, res) => {
    res.render('add_user');
}

exports.update_user = (req, res) => {

    axios.get('http://localhost:3001/api/users', {params:{id:req.query.id}})    
    .then((userData) =>{
        console.log(userData)
        res.render('update_user', {user : userData.data});
    })    
    .catch(err=>{
        res.send(500)
    })
}