"use strict";

const express = require('express');
const path = require('path');

module.exports.init = (app) => {
    // serve api file
    app.use(
        '/api.yaml',
        express.static(path.join(__dirname, './apis/api.yaml'))
    );
}