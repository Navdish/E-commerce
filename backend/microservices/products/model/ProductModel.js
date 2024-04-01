const mongoose = require('mongoose')
const UsersModel = require('./UserModel')

const ProductSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: UsersModel,
        required: true
    },
    uuid: {
        type: String,
    },
    name: { type: String, require: true },
    desc: { type: String, require: true },
    price: { type: Number, require: true },
    stock: { type: Number, require: true },
    images: { type: Array, require: true },
    category: { type: Array, require: true },

}, { timestamps: true })

module.exports = mongoose.model("posts", ProductSchema)