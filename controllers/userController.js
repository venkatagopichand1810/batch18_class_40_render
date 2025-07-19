const User = require("../models/userModel");
const bcrypt = require("bcrypt");


//register the user

exports.registerUser = async(req, res) => {
    const {username, password} = req.body;

    // create and save the user
    const newUser = new User({username, password})
    await newUser.save();

    res.status(201).json({message: "user is registerd succesfully"})

}


//login the user

exports.loginUser = async(req, res) => {
    const {username, password} = req.body;

    try {
        // by username
        const user = await User.findOne({username});

        const match = await bcrypt.compare(password, user.password)
        if(!match){
            return res.status(401).json({message: "Incorret passoword"})
        }
        res.status(200).json({message: "login successfully"})

    } catch(err){
        res.status(500).json({message: "not found"})
    }


}