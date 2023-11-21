"use strict";

const Products = require("../models/products");

module.exports = async () => {
    // TODO find req is starting to be "complicated", it could be move to model as static
    return await Products.find(
        {}, // get all documents
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