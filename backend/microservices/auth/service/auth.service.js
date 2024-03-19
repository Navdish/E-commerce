const { User } = require('../model')
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const CustomError = require('../lib/error');
// const { sentMsg } = require('../index');
const Producer = require('../worker/publisher.js');
const publisher = new Producer();

exports.create = async({data})=> {
    const {name, email, password} = data;
    if(!(name && email && password)) throw new CustomError("User credentials not found", 422);
    const user = await User.findOne({email});
    if(user) throw new CustomError("email already exists", 409);

    // publish the details to the user service 
    console.log(name, email, password);
    try {
        const message = await publisher.sentMsg({name, email, password});
    } catch (error) {
        console.log("error :- ", error)
    }
    
    // subscribe to the event to listen

    // add new user 

    
    // const hash = await bcrypt.hash(password, saltRounds);
    // if(!hash) throw new CustomError("hash not created", 500);
    // const response = await User.create({ email, password : hash});
    // if(!response) throw new CustomError("internal server error", 500)
    return {message : "successful trial"};
}

exports.login = async function({data}) {
    const {email, password} = data;
    if(!(email && password)) throw new CustomError("User credentials not found", 422);
    const user = await User.findOne({email : email}).exec();
    if(!user) throw new CustomError("User doesn't exist", 404);
    if(!( await bcrypt.compare(password, user.password))) throw new CustomError("User password is wrong", 401)
    const token = jwt.sign({id : user._id}, 'Zenmonk', {
        expiresIn: '4h'
    })
    if(!token) throw new CustomError("Token not generating", 500);
    const {_id, ...userTrimmed} = user._doc;
    console.log("userTrimmed", userTrimmed);
    //REMOVE PASSWORD AND _id FROM USER 
    return {token, user};
}
