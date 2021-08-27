const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({ path: "./config/config.env" })



const coonectDB = async () => {

    try {
        const respone = await mongoose.connect(process.env.MONGO_URI, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        }).then(res => console.log(res))


        console.log(`MongoDB CONNECTED !!!`)
    } catch (error) {
        console.log(`Error detected: ${error}`)
    }




}

module.exports = coonectDB