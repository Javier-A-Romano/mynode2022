const express = require("express");
//add axios 
const axios = require('axios')
//add fetch - npm install node-fetch@2

const fetch = require('node-fetch')
const app = express();
app.use(express.text())
app.use(express.json())

//morgan for logs
var morgan = require('morgan')
app.use(morgan('dev'))



app.get('/', function (req, res) {
  res.send('hello, world!')
})
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
app.post('/catchuser', (req, res) => {

  console.log(req.body)
  res.send("deleted product");


})

app.get('/hello/:username', (req, res) => {
  res.send(req.params.username)
  console.log(req.params.username)
})
/*app.get("/movie", (req, res) => {
  res.sendFile("./Bullet.mkv", {
    root: __dirname,
  });
});

*/

app.get('/lol', ({ params }, res) => {
  console.log(params.champion)

  const championjson = async () => {
    try {
      const resp = await fetch('http://ddragon.leagueoflegends.com/cdn/12.6.1/data/en_US/champion.json')
      const data = await resp.json();
      res.json(data)
    } catch (error) { console.log("error in json champions") }


  }
  championjson();
})
app.get('/lol/:champion', ({ params,query }, res) => {
  console.log(params.champion)

  const championjson = async () => {
    try {
      const resp = await fetch('http://ddragon.leagueoflegends.com/cdn/12.6.1/data/en_US/champion.json')
      const datajson = await resp.json();
      const {data} = datajson     
      //object with object for 
      for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
          const element = data[key].id;
          if(element==params.champion){
            console.log(element+ " in if") 
            console.log(query.key)
            if (query.key === "key"){
              
              return res.send("key=" + data[key].key )
            }
            if (query.title === "title"){
              
              return res.send("Title=" + data[key].title )
            }
            return res.json(data[key])
          }
          
        }
      }
      res.send("no encontrado")
    } catch (error) { console.log('error in json champions. ${params.champion}') }


  }
  championjson();
})

const PORT = process.env.PORT || 3000
app.listen(PORT, function(){
  console.log("Server listening in " + PORT)
});

