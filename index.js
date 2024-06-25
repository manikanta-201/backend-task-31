


// Build a simple Hello World server using Node.js and Express.js.







const express =require("express");
const app=express();

const port= process.env.PORT||5080;

app.get("/",(req,res)=>{
    res.send("hello hoorld!")
})


app.get("/about",(req,res)=>{
    res.send("manikanta!")
});
app.listen(port,()=>{
    console.log(`your server is running on port ${port}`);
})