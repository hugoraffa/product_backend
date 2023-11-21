"use strict";

const Products = require("../models/products");

module.exports = async (productId) => {
    // TODO find req is starting to be "complicated", it could be move to model as static
    return await Products.findOne(
        { id: productId }, // get document
        {
            _id: 0,
            id: 1,
            code: 1,
            name: 1,
            description: 1,
            price: 1,
            quantity: 1,
            inventoryStatus: 1,
            category: 1,
            image: 1,
            rating: 1
        } // but not the technical fields
    );
}