"use strict";

const asyncErrorWrapper = require("../errors/asyncErrorWrapper");
const addProduct = require("../handlers/addProduct");
const getAllProducts = require("../handlers/getAllProducts");

module.exports.init = (app) => {
    // all products methods
    app.route('/products')
        // Create a new product
        .post(async (req, res, next) => {
            await asyncErrorWrapper(
                req, res, next,
                async (req, res) => {
                    const productId = await addProduct(req.body);

                    res.status(201).send({ id: productId });
                }
            );
        })
        // Retrieve all products
        .get(async (req, res, next) => {
            await asyncErrorWrapper(
                req, res, next,
                async (req, res) => {
                    const products = await getAllProducts();

                    res.status(200).send({ products: products });
                }
            );
        });
}