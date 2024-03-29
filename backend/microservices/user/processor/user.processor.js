const {userService} = require('../service');

exports.createUser = async (data)=>{
    try {
      const user = await userService.create(data)
    }
    catch (error) {
      console.log("error--------", error)
      return ({message : error?.message});
    }
}