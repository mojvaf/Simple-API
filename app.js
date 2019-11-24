 
const express = require("express");

 const app = express();
 //create a book router 
const bookRouter = express.Router()
 const port = process.env.PORT || 3000;

 bookRouter.route("/books")
 .get((req, res)=>{
     const response = {Hello : "this is my second entry of API"} 
     //sending response back
     res.json(response)
 })
 // the route it is going to serve 
app.use("/api",bookRouter);
// request data 
 app.get("/", (req,res)=>{
     //sending a txt back to response
      res.send("I am responding to your request") 
     
 })
     app.listen(port, () =>{
     console.log("Runing on port" + port);
 })