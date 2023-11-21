"use strict";

const Products = require("../models/products");

module.exports = async (productId) => {
    return await Products.deleteOne(
        { id: productId }
    );
}