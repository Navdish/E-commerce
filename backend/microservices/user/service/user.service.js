const CustomError = require('../lib/error');
const {User} = require('../model');
const Producer = require('../worker/producer.js');
const publisher = new Producer();
const { v4: uuidv4 } = require('uuid');

exports.fetchAllUsers = async({userId, data})=> {
    const user = await User.findById(userId);
    if(!user) throw new CustomError("User not found", 404);
    const {role} = data;
    // call to ACL for access
    const response = await User.find({role});
    if(!response) throw new CustomError("No users found", 500); //204
    return response;
}

exports.newUser = async({userId, data})=> {
    const user = await User.findById(userId);
    if(!user) throw new CustomError("User not found", 404);
    // call to ACL for access
    const response = await User.create(data);
    if(!response) throw new CustomError("User not created", 500); //204
    try {
        await publisher.sentMsg(response, 'user_added');
    } catch (error) {
        console.log("error :-  (error in the user service)", error)
    }
    return response;
}

exports.modifyUser = async({userId, data, params})=> {
    const user = await User.findById(userId);
    if(!user) throw new CustomError("User not found", 404);
    // call to ACL for access
    const response = await User.findByIdAndUpdate(params.userId, {data}, {new: true});
    if(!response) throw new CustomError("No users found", 500); //204
    try {
        await publisher.sentMsg(response, 'user_updated');
    } catch (error) {
        console.log("error :-  (error in the user service)", error)
    }
    return response;
}

exports.restoredUser = async({userId, data, params})=> {
    const user = await User.findById(userId);
    if(!user) throw new CustomError("User not found", 404);
    // call to ACL for access for admin only
    const response = await User.findByIdAndUpdate(params.userId, {role : data.role}, {new: true});  // {role: 'ACTIVE'}
    if(!response) throw new CustomError("No users found", 500); //204
    try {
        await publisher.sentMsg(response, 'user_status_updated');
    } catch (error) {
        console.log("error :-  (error in the user service)", error)
    }
    return response;
}

exports.abandonUser = async({userId, data, params})=> {
    const user = await User.findById(userId);
    if(!user) throw new CustomError("User not found", 404);
    // call to ACL for access for admin and the user who created account
    const response = await User.findByIdAndUpdate(params.userId, {role : data.role}, {new: true});  // {role: 'INACTIVE'}
    if(!response) throw new CustomError("No users found", 500); //204
    try {
        await publisher.sentMsg(response, 'user_deleted');
    } catch (error) {
        console.log("error :-  (error in the user service)", error)
    }
    return response;
}

exports.fetchOneUser = async({userId, params})=> {
    const user = await User.findById(userId);
    if(!user) throw new CustomError("User not found", 404);
    // call to ACL for access 
    const response = await User.findById(params.userId);
    if(!response) throw new CustomError("No users found", 500); //204
    return response;
}

exports.create = async(data)=> {
    const response = await User.create({...data, uuid: uuidv4()});
    if(!response) throw new CustomError("User not created", 500); //204
    try {
        await publisher.sentMsg(response, 'user_added');
    } catch (error) {
        console.log("error :-  (error in the user service)", error)
    }
    return response;
}
// router.get('/',  userController.fetchUsers) fetchAllUsers
// router.post('/',  userController.createUser) newUser
// router.put('/:userId',  userController.updateUser) modifyUser
// router.patch('/:userId',  userController.restoreUser) restoredUser
// router.delete('/:userId',  userController.removeUser) abandonUser
// router.get('/:userId',  userController.fetchUser) fetchOneUser
