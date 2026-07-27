const express = require('express');

const app = express();

app.get('/', (req,res)=>{
  res.send('Hello')
})
app.get('/home',(req,res)=>{
  res.send('Home page')
})
app.get('/contact', function(req,res){
  res.send('Contact page')
})

app.listen(3000);
