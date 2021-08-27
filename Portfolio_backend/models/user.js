const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please add name canit get in touch without it u nameless shit "]
    },

    email: {
        type: String,
        required: [true, "YOUR EMAIL IS NOT THERE U USELESS CUNT"],
        unique: [true, "U wanna contact me twice y tho i m intrested"], match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "YOUR EMAIL AINT VAILD CHECK IT ONE MORE TIME U BABBON"]
    },

    Message: {
        type: String,
        required: [true, "What i dont have words to say or dumb bitch"]
    }
})


module.exports = mongoose.model("User", UserSchema)