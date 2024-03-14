const mongoose = require('mongoose')

const Cart = mongoose.Schema({
    uuid: {
        type: String,
        required: true,
    },
    productId: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        default: 1
    }
}, {timestamps: true})


const CartModel =  mongoose.model('CartModel', Cart);
module.exports = CartModel;