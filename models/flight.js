const mongoose = require('mongoose')
const Schema = mongoose.Schema

 let flightSchema = new Schema({
    airlane: {
        type: String,
        enum: ['SW', 'AM', 'UA']
    },
    flightNo: Number,
    departs: Date
 })


module.exports = mongoose.model('Flight', flightSchema)