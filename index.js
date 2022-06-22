const express = require('express');
const app = express();
require('./confiq');
const cryptoData = require('./cryptoData');

app.use(express.json());
const fetch = require('node-fetch');
const getCurrency = async ()=> {
    const currency = async () => await fetch(
        "https://api.wazirx.com/api/v2/tickers"
    );
    currency().then(result => result.json())
    .then(data =>{
        // console.log(data.btcinr.base_unit);
        Object.keys(data).slice(0,10).map((key, index) => {
            console.log(data[key].base_unit);
        });
    })
    .catch(err =>{
        console.log(err);
    })
}
getCurrency();