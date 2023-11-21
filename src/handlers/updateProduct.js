"use strict";

const Products = require("../models/products");

module.exports = async (productId, productUpdate) => {
    return await Products.findOneAndUpdate(
        { id: productId },
        productUpdate,
        {
            new: true/*, // TODO it seems I am unable to make projection/field filtering work
            projection:
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
            }*/
        });
}

