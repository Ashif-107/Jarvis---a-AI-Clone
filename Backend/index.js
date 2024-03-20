const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const userModel = require('./config')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/Jarvis");

app.post('/signup', (req, res) => {
    userModel.create(req.body).then(users => res.json(users)).catch(err => res.json(err))
}
)

app.post('/login', (req, res) => {
    const { name, password } = req.body
    userModel.findOne({ name: name }).then(user => {
        if (user) {
            if (user.password === password) {
                res.json("success")
            }
            else {
                res.json("password does not match")

            }
        }
        else {
            res.json("No Users found")
        }
    })

})

    app.listen(3001, () => {
        console.log("Server is running on port 3001")
    })