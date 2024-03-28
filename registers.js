const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    guardianname: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    medicalcontext: {
        type: String,
        required: true
    },
    bloodtype:  {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
        required: true
    }

    
})



usersSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next();
    }
})

const Register = new mongoose.model("Register", usersSchema);

module.exports = Register;