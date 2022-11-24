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
  
  var mercadopago = require('mercadopago');
  mercadopago.configure({
      access_token: 'APP_USR-4539738195039843-112221-7bdeb6f992b5f0c439c8504b1a8c1d89-1245850001'
  });
  
  var preference = {
    back_urls:{
      success:'http://localhost:3000/lol?pass=123'
    },
    items: [
      {
        title: 'Test',
        quantity: 1,
        currency_id: 'ARS',
        unit_price: 10.5
      }
    ]
    ,notification_url:'http://localhost:3000/lol/1?pass=123'
  }; 

  router.get('/mp', (req, res) => {
    mercadopago.preferences
  .create(preference)
  .then(function (response) {
    res.send(`<a href="${response.body.init_point}">PAGAR con MP<a> `)
  })
  .catch(function (error) {
    console.log(error);
  });
  
    
  }) 
module.exports= router