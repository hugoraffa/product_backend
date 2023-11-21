"use strict";

const Products = require("../models/products");

module.exports = async (product) => {
    if (product.id === undefined) {
        product.id = Math.floor(Math.random() * Number.MAX_VALUE);
    }

    await Products.create(product);

    return product.id;
}