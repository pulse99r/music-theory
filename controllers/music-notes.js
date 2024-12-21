const express = require('express')
const scales = express.Router()
const data = require('../db/music-notes')

scales.get('/', async (req,res)=>{
    try {
        let allScales = await data 
        console.log(allScales)
        res.send(allScales)    
    } catch (error) {
        res.status(404).json(error)
    }
})
