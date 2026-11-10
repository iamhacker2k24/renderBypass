require('dotenv').config()
const express = require("express")
const app = express();


WEBSITE_URL1 = ""



//here i am going to add all project backend url 
// that are going to start after one function call ok 
// thant means all server startrf in one loading 


const callAll = async () => { // this fn helps to live all other sbackedn url ok 


    
}


app.get("/api/health", (req, res) => {

    res.json(200).json({
        sucess: true,
        msg: "main server started "
    })
})

app.get("")
app.listen("/", () => {
    console.log("server started at 300")
})