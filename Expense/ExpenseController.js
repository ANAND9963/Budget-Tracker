
const Expense = require("./ExpenseModel");


const createExpense = async (req,res) => {
    const data = req.body;
    try{

        const expense = await Expense.create(data);
        res.status(202).json({expense});


    }catch(error){
        console.log("error while inserting data");
        
    }
}



module.exports = {createExpense};