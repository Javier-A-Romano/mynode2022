const express = require("express");
const app = express();
app.use(express.text())
app.use(express.json())
const learning= require('./routers/learning')
const champions= require('./routers/champions')
//morgan for logs
var morgan = require('morgan')
app.use(morgan('dev'))
app.use(({ query }, res, next) => {
  if (query.pass == "123") { next() }

  else {
    res.send("no autorizado agregar al final del link= ?pass=123")
  }
})
app.use(learning)
app.use(champions)

//static or files
app.use("/public", express.static("./public"))

const PORT = process.env.PORT || 3000
app.listen(PORT, function () {
  console.log("Server listening in " + PORT)
});

