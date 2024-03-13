const mongoose = require('mongoose')

const User = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    uuid: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['USER', 'RETAILER', 'RETAILERMANAGER', 'DELIEVERYPARTNER', 'DELIVERYMANAGER', 'SUPERADMIN'],
        default: 'USER'
    }
}, {timestamps: true})


const Users =  mongoose.model('UserModel', User);
module.exports = Users;