const mongoose = require('mongoose')
const Schema = mongoose.Schema

var destinationSchema = new Schema({
    airport: String,
    arrival: Date,
    },{
    timestamps: true
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
    }
 })


module.exports = mongoose.model('Flight', flightSchema)