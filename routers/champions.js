const express = require('express')
//add fetch - npm install node-fetch@2

const fetch = require('node-fetch')
const router = express.Router()

router.get('/lol', ({ params }, res) => {
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
router.get('/lol/:champion', ({ params, query }, res) => {
    console.log(params.champion)

    const championjson = async () => {
        try {
            const resp = await fetch('http://ddragon.leagueoflegends.com/cdn/12.6.1/data/en_US/champion.json')
            const datajson = await resp.json();
            const { data } = datajson
            //object with object for 
            for (const key in data) {
                if (Object.hasOwnProperty.call(data, key)) {
                    const element = data[key].id;
                    if (element == params.champion) {
                        console.log(element + " in if")
                        console.log(query.key)
                        if (query.key === "key") {

                            return res.send("key=" + data[key].key)
                        }
                        if (query.title === "title") {

                            return res.send("Title=" + data[key].title)
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

module.exports = router