const mongoose = require('mongoose');
// const cryptoDataSchema1  = new mongoose.Schema({
//     name:String,
//     last:String,
//     buy:String,
//     sell:String,
//     volume:String,
//     base_unit:String,
//     "base_unit": "btc",
//         "quote_unit": "inr",
//         "low": "2610040.0",
//         "high": "2824000.0",
//         "last": "2610900.0",
//         "type": "SPOT",
//         "open": "2802636",
//         "volume": "115.39757",
//         "sell": "2630747.0",
//         "buy": "2610900.0",
//         "at": 1652114546,
//         "name": "BTC/INR"
// });
const cryptoDataSchema  = new mongoose.Schema({
    currency:{
        base_unit:String,
        quote_unit: String,
        low: String,
        high: String,
        last: String,
        type: String,
        open: String,
        volume: String,
        sell: String,
        buy: String,
        at: Number,
        name: String
    }
});

module.exports = mongoose.model('cryptoData',cryptoDataSchema);