const express = require('express')
var cors = require('cors')
const connectDB = require('./config/db')

const { register, downloadResume } = require('./controller/user')

connectDB();


const PORT = 5000;
const app = express();
app.use(express.json())
app.use(cors())

app.route('/portfolio/form').post(register)
app.route('/portfolio/downloadpdf').get(downloadResume)
app.listen(PORT, () => {
    console.log("Server is listening at port " + PORT)
})