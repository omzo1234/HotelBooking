import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
     _id : {type: String, require: true},
     username : {type: String, require: true},
     email : {type: String, require: true},
     image : {type: String, require: true},
     role : {type: String, enum:["user", "hotelOwner"], default:"user"},

    

})
