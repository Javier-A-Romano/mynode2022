const express = require('express')

const router = express.Router()

router.get('/', function (req, res) {
    res.send('hello, world!')
  })
  router.get("/products", (req, res) => {
    res.send("List product");
  });
  router.post("/products", (req, res) => {
    res.send("creating product");
  });
  router.put("/products", (req, res) => {
    res.send("update product");
  });
  router.delete("/products", (req, res) => {
    res.send("deleted product");
  });
  router.patch("/products", (req, res) => {
    res.send("update one part product");
  });
  
  //archivo//
  router.get("/filesecret", (req, res) => {
    res.sendFile("./download.png", {
      root: __dirname,
    });
  });
  //file json//
  router.get("/user", (req, res) => {
    res.json({
      name: "shorlak",
      lastname: "shorlak123",
      address: {
        city: "catamarca",
      },
    });
  });
  //life?//
  router.get("/life", (req, res) => {
    res.sendStatus(204);
  });
  
  
  //catch json//
  router.post('/catchuser', (req, res) => {
  
    console.log(req.body)
    res.send("deleted product");
  
  
  })
  
  router.get('/hello/:username', (req, res) => {
    res.send(req.params.username)
    console.log(req.params.username)
  })
  /*app.get("/movie", (req, res) => {
    res.sendFile("./Bullet.mkv", {
      root: __dirname,
    });
  });
  
  */
  
module.exports= router