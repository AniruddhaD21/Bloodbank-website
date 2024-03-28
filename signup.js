const mongoose = require('mongoose');

const signupSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }

})

const signup = new mongoose.model("signup", signupSchema);

module.exports = signup;