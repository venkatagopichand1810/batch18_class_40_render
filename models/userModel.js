
// we are going to create the schema and export the model(collection)

const mongoose = require("mongoose");

// create the schema

const userSchema = new mongoose.Schema({
    name: String,
    email: String
})

module.exports = mongoose.model("Uservenkat", userSchema)