"use strict";

module.exports = async (req, res, next, callback) => {
    try {
        await callback(req, res);
    }
    catch (err) {
        next(err);
    }
}