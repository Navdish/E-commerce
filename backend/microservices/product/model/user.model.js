const mongoose = require('mongoose')

const User = mongoose.Schema({
    role: {
        type: String,
        enum: ['USER', 'RETAILER', 'RETAILERMANAGER', 'DELIEVERYPARTNER', 'DELIVERYMANAGER', 'SUPERADMIN'],
        default: 'USER'
    },
    uuid: {
        type: String,
        required: true,
    }
}, {timestamps: true})


const Users =  mongoose.model('UserModel', User);
module.exports = Users;