const {authService} = require('../service');

exports.createUser = async (data)=>{
    try {
      console.log("processor", data)
      const user = await authService.subCreateUser(data);
      return ({message : "user added successfully"})
    }
    catch (error) {
      return ({message : error?.message});
    }
}

exports.updateUser = async (data)=>{
    try {
      const user = await authService.subUpdateUser(data);
      res.status(200).json({user, message: "user updated successfully"});
    }
    catch(error) {
      res.status(error?.code).json({message : error?.message});
    }
}

exports.updateUserStatus = async (data)=>{
    try {
      const user = await authService.subUpdateUserStatus(data);
      res.status(200).json({user, message: "user status updated successfully"});
    }
    catch(error) {
      res.status(error?.code).json({message : error?.message});
    }
}
exports.deleteUser = async (data)=>{
    try {
      const user = await authService.subDeleteUser(data);
      res.status(200).json({user, message: "user deleted successfully"});
    }
    catch(error) {
      res.status(error?.code).json({message : error?.message});
    }
}