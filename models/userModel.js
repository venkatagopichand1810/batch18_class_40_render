
// we are going to create the schema and export the model(collection)

const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

// create the schema

const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true, 
        unqiue: true
    },
    password: {
        type: String, 
        required: true
    }
})



// hash password before saving into the db
userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next()

        try {
            const salt = await bcrypt.genSalt(10); //generate the salt
            this.password = await bcrypt.hash(this.password, salt); // hashed password
            next();
        } catch(err){
            next(err)
        }
})


module.exports = mongoose.model("Uservenkat", userSchema)