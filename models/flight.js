const mongoose = require('mongoose')
const Schema = mongoose.Schema

let flightSchema = new Schema({
    airlane: String,
    flightNo: Number,
    departs: Date,
})


module.exports = mongoose.model('Flight', flightSchema)