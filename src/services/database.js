"use strict";

const mongoose = require('mongoose');

// TODO add env var for db connection
// TODO error management
module.exports.init = async () => await mongoose.connect('mongodb://127.0.0.1:27017');