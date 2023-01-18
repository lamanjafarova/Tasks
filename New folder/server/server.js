const express = require("express");
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express();
const port = 8000;
 

let idCounter = 3;
let chatData = [
    {
        id: 1,
        name: "John",
        message: "salam, necəsən?",
    },
    {
        id: 2,
        name: "Sam",
        message: "salam, yaxşıyam",
    }
]


app.use(cors());
app.use(bodyParser.json())
app.get("/chatData", (req, res) => {
    res.send(chatData)
})
app.get("/chatData/:id", (req, res) => {
    const id = req.params.id;
    const selectedUsers = chatData.find((user) => user.id == id)
    if(selectedUsers){
        res.send(selectedUsers)
        res.status(200)
    }
    else{
        res.send(404).json({message: "not found"})
    }
})
app.post("/chatData", (req, res) => {
    let userObj = {
        id: idCounter++,
        name: req.body.name,
        message: req.body.message,
    }
    chatData.push(userObj)
    res.status(200).json({message: "post new users"})
})

app.listen(port, () => {
    console.log(`http://localhost:${port}/chatData`)
})