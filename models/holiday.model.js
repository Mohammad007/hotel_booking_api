// Holiday.js
const mongoose = require('mongoose');

const holidaySchema = new mongoose.Schema({
    adultPrice: {
    type: Number,
    default: 1
  },
  childrenPrice: {
    type: Number,
    default: 1
  },
  holidayType: {
    type: String,
    default: 'summer'
  }, // 'winter' or 'summer'
},
{
    timestamps: true
}
);

module.exports = mongoose.model('Holiday', holidaySchema);
