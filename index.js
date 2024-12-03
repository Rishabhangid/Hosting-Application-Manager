// IMPORTING MODULES
const express = require("express");
const app = express();
const cors = require("cors"); // deals with cors policy

const dotenv = require("dotenv"); // stores confidential information 
dotenv.config({ path: "./config.env" }); // importing .env file

require("./dbconnection/connection"); // coonection to database
// app.use(cors()); // cors policy
const corsOptions = {
    origin: process.env.FRNT_LINK,
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json()); // convert response into json format


app.use(require("./routes/route")); // importing routes

const PORT = process.env.PORT || 6053;
app.listen(PORT, () => { console.log(`Server started at port no: ${PORT}`) }) // starting server