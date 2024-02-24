const mongoose =require("mongoose");
const moment = require("moment");

const UserSchema = new mongoose.Schema({
    avatar:{
        type: String,
    },
    username:{
        type:String,
        required : true,
    },
    password:{
        type:String,
        required:true,
    },
    followers:{
        type:Array,
    },
    followBtn : {
        type:String,
        default:"Follow",
    },
    tweets: [{type : mongoose.Schema.Types.ObjectId ,ref:"Tweet"}],
});

const User = mongoose.model("User",UserSchema);

module.exports ={User};