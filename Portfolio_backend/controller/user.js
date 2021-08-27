const User = require('../models/user')
const path = require('path')
const fs = require("fs");


const { pathResume } = require('../path')

exports.register = async (req, res, next) => {

    const { name, email, Message } = req.body;

    try {
        const user = await User.create({
            name,
            email,
            Message

        })

        console.log("new user", user)

        res.json({ success: true, user: user })

    } catch (error) {
        console.log("Error detected !! " + error)
    }



}


// exports.downloadResume = async (req , res , next)=>{

// }

exports.downloadResume = async (req, res, next) => {


    let resume = pathResume
    console.log(resume)

    fs.access(resume, fs.constants.F_OK, err => {


        console.log(`${resume} ${err ? "does not exist" : "exists"}`);
    });

    fs.readFile(resume, function (err, content) {
        if (err) {

            res.end("<h1>No such image</h1>");
        } else {
            //specify the content type in the response will be an image

            res.download(resume)
        }
    });



}