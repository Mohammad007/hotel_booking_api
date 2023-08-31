const mongoose = require('mongoose');
const { MONGO_URI } = require('../config/config');

const DB = mongoose.connect(MONGO_URI);

module.exports = DB