const express = require("express");
const app = express();
const mongoose = require("mongoose");

const PORT = 8000;

app.listen(8000,()=>{
    console.log(`web running on ${PORT}`);
})