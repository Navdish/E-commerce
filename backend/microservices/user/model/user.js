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
    },
    language :[{
        type: String,
    }],
    interest : [{
        type: String,
    }],
    address : {
        type: Object
    },
    phone : Number
}, {timestamps: true})


const Users =  mongoose.model('UserModel', User);
module.exports = Users;