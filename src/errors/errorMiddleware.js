"use strict";

const { Error } = require('mongoose');
const openApiValidator = require('express-openapi-validator');
const mongodb = require('mongodb');

module.exports = (error) => {
    if (error instanceof Error.ValidationError) {
        return 400;
    }
    else if (error instanceof openApiValidator.error.BadRequest) {
        return 400;
    }
    // db key index already exists
    else if (error instanceof mongodb.MongoServerError) {
        return 409;
    }
    else {
        return 500;
    }
}