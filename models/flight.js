const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    flight: {
        type: String,
        required: true
    },
    arrival: {
        Date
      }
    }, {
      timestamps: true
});

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Delta', 'Spirit', 'United']
    },
    airport: {
        type: String,
        enum: ['LAX', 'JFK', 'ATL', 'DFW']
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10, 
        max: 9999
    },
    departs: {
        type: Date,
        default: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    },
    destinations: [destinationSchema]
});

module.exports = mongoose.model('Flight', flightSchema);