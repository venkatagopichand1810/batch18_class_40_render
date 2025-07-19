const User = require("../models/userModel");

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        console.log("Fetched users", users);
        res.json(users)
    } catch (err) {
        res.status(500).json({ error: "server error" })
    }

}

// find by user by id

const getUserById = async(req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user)
}

 const createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        console.log("saves user", savedUser)
        res.json(201).json(savedUser)
    } catch (err) {
        res.status(500).json({ error: "server error" })
    }

}

module.exports = {
    getUsers,
    createUser,
    getUserById
}