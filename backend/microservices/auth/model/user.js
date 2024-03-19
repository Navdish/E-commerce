const mongoose = require('mongoose')

const User = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    uuid: {
        type: String, 
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
        enum: ['USER', 'RETAILER' ,'ADMIN']
    },
    status: {
        type: String,
        enum: ['ACTIVE', 'INACTIVE']
    },
    tempStatus: {
        type: String,
        enum: ['PENDING', 'SUCCESS']
    }
}, {timestamps: true})


const Users =  mongoose.model('UserModel', User);
module.exports = Users;