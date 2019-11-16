const mongoose = require('mongoose')
const Schema = mongoose.Schema

 let flightSchema = new Schema({
    airlane: {
        type: String,
        enum: ['SW', 'AM', 'UA']
    },
    flightNo: {
       type: Number,
       required: true,
       min: 10,
       max: 9999 
    },
    departs: {
        type: Date,
        // default: function(){
        //     return new Date().getFullYear();
        // },
        default: function(){
           // return new Date().now + (365*24*60*60000);
           return new Date().getDate() + 365
        },
    }
 })


module.exports = mongoose.model('Flight', flightSchema)