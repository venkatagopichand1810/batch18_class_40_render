
// import the expres
const express = require("express");

// load the env variables from the .env file we have to use 
require("dotenv").config();

// import db connection
const connectDB = require("./config/db")

// import the routes
const userRoutes = require("./routes/userRoutes")


//connect to the mongodb
connectDB()

const app = express(); //init the express app
//middleware for the api response body
app.use(express.json())


// middleware for the routes
app.use('/api', userRoutes)



// start the start the server on port

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running at the port number ${PORT}`)
})

