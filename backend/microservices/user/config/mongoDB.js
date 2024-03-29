const mongoose = require('mongoose');
require("dotenv").config();



(async ()=>  {
    try {
        await mongoose.connect(`mongodb+srv://navdishjaggi:navdishjaggi@cluster0.5cq0n29.mongodb.net/`)
        console.log("Database is connected");
    } catch (error) {
        console.log(error);
    }
  })();