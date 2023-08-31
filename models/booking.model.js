const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    adults: {
        type: Number,
        default: 1
    },
    children: {
        type: Number,
        default: 1
    },
    days: {
        type: Number,
        default: 1
    },
    price: {
        childrenPrice: {
            type: Number
        },
        adultsPrice: {
            type: Number
        },
        totalPrice: {
            type: Number
        },
    },
    holidayType: {
        type: String,
        default: 'summer'
    }, // 'winter' or 'summer'
},
{
    timestamps: true
});

module.exports = mongoose.model('Booking', bookingSchema);