const express = require('express');

const app = express();

const port = 3000;

app.get('/',(req,res)=>{
    res.send("I am from NodeJS");
})


app.listen(port, ()=>console.log(`the service is up and running at port ${port}`));