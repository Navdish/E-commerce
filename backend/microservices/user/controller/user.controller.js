const {userService} = require('../service');


exports.fetchUsers = async(req, res)=> {
    try {
        const user = await userService.fetchAllUsers({user_id : req?.user?.id, data : req?.body});
        res.status(200).json({message : 'users fetched successfully'})
    }
    catch(error) {
        res.status(error?.code).json({message : error?.message});
    }
}

exports.createUser = async(req, res)=> {
    try {
        const user = await userService.newUser({user_id : req?.user?.id, data : req?.body});
        res.status(200).json({message : 'user created successfully'})
    }
    catch(error) {
        res.status(error?.code).json({message : error?.message});
    }
}

exports.updateUser = async(req, res)=> {
    try {
        const user = await userService.modifyUser({user_id : req?.user?.id, data : req?.body, params : req?.params});
        res.status(200).json({message : 'user updated successfully'})
    }
    catch(error) {
        res.status(error?.code).json({message : error?.message});
    }
}

exports.restoreUser = async(req, res)=> {
    try {
        const user = await userService.restoredUser({user_id : req?.user?.id, data : req?.body, params : req?.params});
        res.status(200).json({message : 'user restored successfully'})
    }
    catch(error) {
        res.status(error?.code).json({message : error?.message});
    }
}

exports.removeUser = async(req, res)=> {
    try {
        const user = await userService.abandonUser({user_id : req?.user?.id, data : req?.body, params : req?.params});
        res.status(200).json({message : 'user removed successfully'})
    }
    catch(error) {
        res.status(error?.code).json({message : error?.message});
    }
}

exports.fetchUser = async(req, res)=> {
    try {
        const user = await userService.fetchOneUser({user_id : req?.user?.id, params : req?.params});
        res.status(200).json({message : 'user fetched successfully'})
    }
    catch(error) {
        res.status(error?.code).json({message : error?.message});
    }
}
// router.get('/',  userController.fetchUsers) fetchAllUsers
// router.post('/',  userController.createUser) newUser
// router.put('/:userId',  userController.updateUser) modifyUser
// router.patch('/:userId',  userController.restoreUser) restoredUser
// router.delete('/:userId',  userController.removeUser) abandonUser
// router.get('/:userId',  userController.fetchUser) fetchOneUser