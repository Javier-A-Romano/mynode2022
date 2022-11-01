const express = require("express");
const app = express();
require('ejs')
app.use(express.text())
app.use(express.json())


const learning= require('./routers/learning')
const champions= require('./routers/champions')
const championdata= require('./routers/championdata')
//morgan for logs
var morgan = require('morgan');
const patch=require('path')
//const { patch } = require("./routers/learning");
//config for ejs
app.set('view engine','ejs')
app.set('views', patch.join(__dirname,'views'))
//config for logs in cmd
app.use(morgan('dev'))

app.use(({ query }, res, next) => {
  if (query.pass == "123") { next() }

  else {
    res.send("no autorizado agregar al final del link= ?pass=123")
  }
})

app.use(learning)
app.use(champions)
app.use(championdata)
//ejs for views
app.use('/images',(req,res)=>{
  
  res.render('index.ejs',{name:'messi',edad:'100',lastname:'ronaldo'})
})
//static or files
app.use("/public", express.static("./public"))

const PORT = process.env.PORT || 3000
app.listen(PORT, function () {
  console.log("Server listening in " + PORT)
});

