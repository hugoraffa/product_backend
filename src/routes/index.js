"use strict";

const express = require('express');
const errorMiddleware = require('../errors/errorMiddleware');
const openApiValidator = require('express-openapi-validator');
const path = require('path');

// TODO loader can be automated by reading the folder and excluding index.js
const allRoutes = [
    require('./allProducts'),
    require('./oneProduct'),
    require('./healthCheck'),
    require('./api')
];

const app = express();

// json parser MW
app.use(express.json());

// req/res validation MW
app.use(
    openApiValidator.middleware({
        apiSpec: path.join(__dirname, './apis/api.yaml'),
        validateRequests: true, // (default)
        validateResponses: false, // false by default
    }),
);

// TODO logging middlewares

// routes initialization
for (const route of allRoutes) {
    route.init(app);
}

// error middleware entry point
app.use((err, req, res, next) => {
    console.error(err);

    const errorStatus = errorMiddleware(err);
    res.status(errorStatus).send();
})

// TODO add env var for listening host and port
app.listen(4567);