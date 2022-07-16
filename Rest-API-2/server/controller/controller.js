const Userdb = require('../model/model');

//create and save new user
exports.create=(req, res) => {
    //validate request   
    if(!req.body){
        res.status(400).send({message: "Content cannot be empty!"})
        return;
    }

    //new user
    const user = new Userdb({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status
    })

    //save user in db
    user
    .save(user)
    .then(data=>{
        //res.send(data)  
        res.redirect('/add-user')      
    })
    .catch(err=>{
        res.status(500).send({message: err.message || "Error occured while creating user"})
    })
}

//retrieve and return all users/ retrieve and return single user
exports.find=(req, res) => {
    
    if(req.query.id){
        const id = req.query.id
        Userdb.findById(id)
        .then(data =>{
            if(!data){
                res.status(404).send({message: `User ${id} not found!`})
            } else {
                res.send(data)
            }            
        })
        .catch(err =>{
            res.status(500).send({message: err.message || `Error occured while retrieving user ${id}`})
        })
    } else {
        Userdb.find()
    .then(user =>{
        res.send(user)
    })
    .catch(err =>{
        res.status(500).send({message: err.message || "Error occured while retrieving user"})
    })
    }    
}

//update user by user id
exports.update=(req, res) => {
    if(!req.body){
        return res.status(400).send({message: "Data to update canncot be empty!"})        
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id,req.body, {useFindAndModify : false})
    .then(data =>{
        if(!data){
            res.status(500).send({message: `User ${id} not found!`})
        } else {
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message: err.message || "Error occured while updating user"})
    })
}

//delete user by user id
exports.delete=(req, res) => {
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
    .then( data => {
        if(!data){
            res.status(500).send({message: `User ${id} not found!`})
        } else {
            res.send({message :"User deleted successfully!"})
        }        
    })
    .catch(err=>{
        res.status(500).send({message: err.message || "Error occured while updating user"})
    })
    
}