const Expense = require("./ExpenseModel");

const Category = require("../Category/CategoryModel");

const getExpense = async (req, res) => {
  try {
    const allexpenses = await Expense.find()
      .populate({
        path: "budgetId",
        model: "Budget",
        select: { _id: 0, title: 1, budgetAmount: 1 },
      })
      .populate({
        path: "categoryId",
        model: "Category",
        select: { _id: 0, title: 1 },
      });
    res.status(202).json(allexpenses);
  } catch (error) {
    console.log("error getting expenses",error);
    res.status(500).json({ message: "Server error while fetching ." });
  }
};

const createExpense = async (req, res) => {
  const data = req.body;
  try {
    const expense = await Expense.create(data);
    res.status(202).json({ expense });
  } catch (error) {
    console.log("error while inserting data");
  }
};

const getExpenseByCategory = async (req, res) => {
  try {
    let aggresult = await Expense.aggregate([
      {
        $group: { _id: "$categoryId", amount: { $sum: "$amount" } },
      },
      {
        $sort: { amount: 1 },
      },
    ]);

    await Category.populate(aggresult,{
        path:"_id",
        model : "Category",
        select :{ _id: 0 , title : 1},

    })

    let result = [];

    aggresult.map((re)=>{
        result.push({catName : re._id.title, amount : re.amount});
    })

    res.status(200).json(result);
    

  } catch (error) {
    console.error("Error while getting data:", error);
    res.status(500).json({ message: "Server error while fetching expenses." });
  }
};

module.exports = { createExpense, getExpense, getExpenseByCategory };
