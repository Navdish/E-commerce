const mongoose = require('mongoose')

const Product = mongoose.Schema({
    retailerId: {
        type: String,
        required: true
    },
    uuid: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    images :[{
        type: String,
        required: true
    }],
    reviews : [{
        type: String,
    }],
    properties : {
        type: Object,
    }
}, {timestamps: true})


const Products =  mongoose.model('productModel', Product);
module.exports = Products;