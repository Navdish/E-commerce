const { User } = require('../model')
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const CustomError = require('../lib/error');
// const { sentMsg } = require('../index');
const Producer = require('../worker/producer.js');
const publisher = new Producer();

exports.create = async({data})=> {
    const {name, email, password} = data;
    if(!(name && email && password)) throw new CustomError("User credentials not found", 422);
    const user = await User.findOne({email});
    if(user) throw new CustomError("email already exists", 409);
    try {
        await publisher.sentMsg(data, 'user_registered');
    } catch (error) {
        console.log("error :-  (error in the user service)", error)
    }
    const hash = await bcrypt.hash(password, saltRounds);
    if(!hash) throw new CustomError("hash not created", 500);
    const response = await User.create({ name, email, password : hash, tempStatus: 'PENDING'});
    if(!response) throw new CustomError("internal server error", 500)
    return {message : "successful trial"};
}

exports.login = async function({data}) {
    const {email} = data;
    const pwd = data.password;
    if(!(email && pwd)) throw new CustomError("User credentials not found", 422);
    const userDetails = await User.findOne({email : email});
    if(!userDetails) throw new CustomError("User doesn't exist", 404);
    if(!( await bcrypt.compare(password, userDetails.password))) throw new CustomError("User password is wrong", 401)
    const token = jwt.sign({id : userDetails._id}, 'Zenmonk', {
        expiresIn: '4h'
    })
    if(!token) throw new CustomError("Token not generating", 500);
    const {_id , password, ...user} = userDetails._doc;
    return {token, user};
}

exports.subCreateUser = async({data}) => {
    const {uuid} = data;
    const user = User.findOneAndUpdate({uuid}, data, {new: true});
    if(!user) throw new CustomError("Internal server error", 500);
    console.log(user);
    return user;
}

exports.subUpdateUser = async(data) => {
    const {uuid} = data;
    const user = User.findOneAndUpdate({uuid}, data, {new: true});
    if(!user) throw new CustomError("Internal server error", 500);
    console.log(user);
    return user;
}

exports.subUpdateUserStatus = async(data) => {
    const {uuid} = data;
    const user = User.findOneAndUpdate({uuid}, data, {new: true});
    if(!user) throw new CustomError("Internal server error", 500);
    console.log(user);
    return user;
}

exports.subDeleteUser = async(data) => {
    const {uuid} = data;
    const user = User.findOneAndUpdate({uuid}, {status: 'INACTIVE'}, {new: true});
    if(!user) throw new CustomError("Internal server error", 500);
    console.log(user);
    return user;
}



