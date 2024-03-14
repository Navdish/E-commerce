const mongoose = require('mongoose')

const Order = mongoose.Schema({
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
    status: {
        type: String,
        enum: ['QUEUED', 'SHIPPED', 'STORE', 'DISPATCHED', 'RECIEVED', 'DAMAGED', 'WRONG', 'RETURNED'],
        default: 'QUEUED'
    },
    quantity: {
        type: Number,
        default: 1
    },
    price: {
        type: Number,
    }
}, {timestamps: true})


const Orders =  mongoose.model('OrderModel', Order);
module.exports = Orders;