const express = require('express')
//add fetch - npm install node-fetch@2

const fetch = require('node-fetch')
const router = express.Router()
require('ejs')
const patch=require('path')



router.get('/championdata', (req, res) => {
    

    const championjson = async () => {
        try {
            const resp = await fetch('http://ddragon.leagueoflegends.com/cdn/12.6.1/data/en_US/champion.json')
            const dataresp = await resp.json();
            const {data} =dataresp ;
            
            res.render('championdata.ejs',{datos:data})
        } catch (error) { console.log("error in json champions") }


    }
    championjson();
})

module.exports = router