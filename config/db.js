
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongodb connected successfully")

    } catch(err){
        console.log("error connection")
    }
}

module.exports = connectDB;