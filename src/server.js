const bodyParser = require("body-parser");
const express = require("express");

const server = express();
const mongoose = require("mongoose")
server.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

mongoose.Promise = global.Promise;
const uri = "mongodb://127.0.0.1:27017/Budget"
const mongodb = mongoose.connect(uri).then(()=>{
    console.log("mongodb db is connected and running");
    
}).catch((err)=>{

    console.log("mongo db is failed to connect");
    

})

const budgetRoutes = require("../Budget/routes");
budgetRoutes(server);
const CategoryRoutes = require("../Category/routes");
CategoryRoutes(server);
const ExpenseRoutes = require("../Expense/routes");
ExpenseRoutes(server);

server.listen(PORT,()=>{
    console.log(`server is running on  ${PORT}`);
    
})