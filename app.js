

// imports
const mongoose=require("mongoose");
const express = require("express");

const carRouter = require("./router/carRouter");
const app = express();
// Middle ware
app.use(express.json());
// app.use("/api/activity",express.static("../"))


app.use("/car",carRouter);
app.use(express.static("public"));

// server
module.exports = app;
