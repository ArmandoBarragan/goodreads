const express = require('express');
const { dbPool } = require("../../config/settings")

const router = express.Router();

router.get("/", (req, res)=> {
    res.send("Respuesta")
})


router.delete("/", (req, res)=> {
    
})


router.post("/", (req, res)=> {
    
})

module.exports = router;