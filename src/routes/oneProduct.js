"use strict";

const deleteProduct = require("../handlers/deleteProduct");
const getProduct = require("../handlers/getProduct");
const updateProduct = require("../handlers/updateProduct");
const asyncErrorWrapper = require("../errors/asyncErrorWrapper");

module.exports.init = (app) => {
    // one product methods
    app.route('/products/:productId')
        // Retrieve details for product 1
        .get(async (req, res, next) => {
            await asyncErrorWrapper(
                req, res, next,
                async (req, res) => {
                    const product = await getProduct(req.params.productId);

                    res.status(200).send(product);
                }
            );
        })
        // Update details of product 1 if it exists
        .patch(async (req, res, next) => {
            await asyncErrorWrapper(
                req, res, next,
                async (req, res) => {
                    const newProduct = await updateProduct(req.params.productId, req.body);

                    res.status(200).send(newProduct);
                }
            );
        })
        // Remove product 1
        .delete(async (req, res, next) => {
            await asyncErrorWrapper(
                req, res, next,
                async (req, res) => {
                    await deleteProduct(req.params.productId);

                    res.status(204).send();
                }
            );
        });
}
