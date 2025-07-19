const express = require("express");
const router = express.Router();
const { getUsers, createUser} = require("../controllers/userController");


// routes
router.get("/get", getUsers);

//routes for post
router.post("/post", createUser);

module.exports = router
