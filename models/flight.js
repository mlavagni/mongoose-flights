const mongoose = require('mongoose')
const Schema = mongoose.Schema

let destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX','SAN','SEA'],
        default:'SAN'
    },
    arrival: {
        type: Date
    }
    });

 let flightSchema = new Schema({
    airlane: {
        type: String,
        enum: ['Southwest', 'American', 'United']
    },
    flightNo: {
       type: Number,
       required: true,
       min: 10,
       max: 9999 
    },
    departs: {
        type: Date,
        default:  Date.now() + (366*24*60*60*1000)
    },
    destinations: [destinationSchema]
}, {
    timestamps: true
 })


module.exports = mongoose.model('Flight', flightSchema)