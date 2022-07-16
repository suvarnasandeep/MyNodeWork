const express = require('express');
const alien = require('../models/alien');
const alienAccess = require('../models/alien')

const router = express.Router();

router.get('/', async (req, res) => {
    
    try {
        const aliens = await alienAccess.find()
        
        res.json(aliens)

    } catch(err){
        res.send('Error ' + err)
    }    
})

router.get('/:id', async (req, res) => {
    
    try {
        const alien = await alienAccess.findById(req.params.id)
        
        res.json(alien)

    } catch(err){
        res.send('Error ' + err)
    }    
})

router.post('/' , async(req, res) => {
    const alien = new alienAccess({
        name : req.body.name,
        tech : req.body.tech,
        sub : req.body.sub
    })

    try{
        const a1 = await alien.save();
        res.json(a1)
    } catch(err){
        res.send('Error ' + err)
    }
})

//update partial entity
router.patch('/:id' , async(req, res) => {    

    try{
        const alien = await alienAccess.findById(req.params.id);
        alien.sub = req.body.sub;
        const a1 = await alien.save();
        res.json(a1)
    } catch(err){
        res.send('Error ' + err)
    }


})
module.exports = router;