console.log("hello");
const express = require("express");

const app = express();
app.use(express.text())
app.use(express.json())
app.get("/products", (req, res) => {
  res.send("List product");
});
app.post("/products", (req, res) => {
  res.send("creating product");
});
app.put("/products", (req, res) => {
  res.send("update product");
});
app.delete("/products", (req, res) => {
  res.send("deleted product");
});
app.patch("/products", (req, res) => {
  res.send("update one part product");
});

//archivo//
app.get("/filesecret", (req, res) => {
  res.sendFile("./download.png", {
    root: __dirname,
  });
});
//file json//
app.get("/user", (req, res) => {
  res.json({
    name: "shorlak",
    lastname: "shorlak123",
    address: {
      city: "catamarca",
    },
  });
});
//life?//
app.get("/life", (req, res) => {
    res.sendStatus(204);
  });

  
//catch json//
app.post('/catchuser',(req,res)=>{

console.log(req.body) 
 res.send("deleted product");


})  

app.get('/hello/:username',(req,res)=>{
  res.send(req.params.username)
  console.log(req.params.username)
})
/*app.get("/movie", (req, res) => {
  res.sendFile("./Bullet.mkv", {
    root: __dirname,
  });
});*/
app.listen(3000);
console.log("${3000}");
