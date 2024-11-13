
const Budget = require("./BudgetModel");


const createBudget = async (req,res) => {
    const data = req.body;
    try{

        const budget = await Budget.create(data);
        res.status(202).json({budget});


    }catch(error){
        console.log("error while inserting data");
        
    }
}



module.exports = {createBudget};