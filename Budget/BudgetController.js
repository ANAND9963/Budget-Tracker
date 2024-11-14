const Budget = require("./BudgetModel");
const Expense = require("../Expense/ExpenseModel");

const getBudget = async (req, res) => {
  try {
    const allbudget = await Budget.find().select({
      _id: 0,
      title: 1,
      budgetAmount: 1,
    });
    res.status(200).json({ allbudget });
  } catch (error) {
    console.log("error while getting budget data", error);
    res.status(500).json({ message: "Server error while fetching ." });
  }
};

const createBudget = async (req, res) => {
  const data = req.body;
  try {
    const budget = await Budget.create(data);
    res.status(202).json({ budget });
  } catch (error) {
    console.log("error while inserting data",error);
    res.status(500).json({ message: "Server error while fetching ." });
  }
};

const getBudgetSummary = async (req, res) => {
  const { id } = req.params;

  try {
    const {budgetAmount} = await Budget.findById(id);
    const allexpenses = await Expense.aggregate([{

        $group : {
            _id : 1, totalExpense : {
                $sum : "$amount"
            }
        }

    }])


    res.status(200).json(budgetAmount -allexpenses[0].totalExpense);
   
  } catch (error) {
    console.log("error getting details",error);
    res.status(500).json({ message: "Server error while fetching ." });
  }
};

module.exports = { createBudget, getBudget, getBudgetSummary };
