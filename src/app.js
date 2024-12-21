const express = require("express");

const app = express();

app.use("/test" , (req , res) => {
    res.send("test Server here.....")
})

app.use("/" , (req , res) =>{
    res.send("Server here ");
});

app.listen(7772 , ()=>{
    console.log("Successfully launched server\n");
})