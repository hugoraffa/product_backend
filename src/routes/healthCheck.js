"use strict";

module.exports.init = (app) => {
    // healthcheck
    app.get('/', function (req, res) {
        res.send('I am alive');
    });
}