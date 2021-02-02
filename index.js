//grab packages
const express = require('express');
const app = express();

//add home route
app.get('/', (req,res)=>{
    res.send(`Today's topic will be classes`)
})

//set port
const PORT = process.env.PORT || 8000
app.listen(PORT, ()=>{
    console.log(`server listening @ port: ${PORT}🥷🏽`)
})