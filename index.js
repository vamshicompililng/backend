require('dotenv').config()
const express = require('express')
// import express from 'express';
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send("vamshi")
})
app.get('/youtube',(req,res)=>{

    res.send("<h1>opening youtube<h1>")
  
})
app.listen(process.env.PORT ,() => {
  console.log(`Example app listening on port ${port}`)
})