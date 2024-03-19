const {userService} = require('../service');

exports.createUser = async (req, res)=>{
    try {
      const user = await userService.create({data : req?.body})
      res.status(201).json({message : "user added successfully"})
    }
    catch (error) {
      res.status(error?.code).json({message : error?.message});
    }
}