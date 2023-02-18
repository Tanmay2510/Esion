const mongoose = require("mongoose");

// making connection to the mongoDB via mongoose connect function.
const connectDB = async () => {
  const database = "esion";

  const MONGO_URI = 
  `mongodb+srv://Tanmayesion:Tanmay@cluster0.zmu92ca.mongodb.net/${database}?retryWrites=true&w=majority`
  try {
    const connection = await mongoose.connect(MONGO_URI);
    
    console.log(`MongoDB Connected: ${connection.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
module.exports = connectDB;