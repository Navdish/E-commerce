const {userService} = require('../service');

exports.createUser = async (data)=>{
    try {
      const user = await userService.create(data)
      res.status(201).json({message : "user added successfully"})
    }
    catch (error) {
      res.status(error?.code).json({message : error?.message});
    }
}