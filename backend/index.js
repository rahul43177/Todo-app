const express = require("express");
const app = express();
const route = require("./routes/route");
const mongoose = require("mongoose")
const dotenv = require('dotenv').config()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", route);


mongoose.connect(process.env.MONGODB_STRING)
.then(()=> {
    console.log(`MongoDB is connected`)
})
.catch((error) => {
    console.log(`The error is ${error}`)
})



app.listen(process.env.PORT, () => {
  console.log(`The server is running on the port ${process.env.PORT}`);
});
