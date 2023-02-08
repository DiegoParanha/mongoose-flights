const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    flight: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5
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
        type: Number,
        default: function() {
            return new Date().getFullYear();
        }
    } 
});

module.exports = mongoose.model('Flight', flightSchema);