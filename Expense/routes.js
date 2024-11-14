const {createExpense, getExpense, getExpenseByCategory} = require('./ExpenseController');

const ExpenseRoutes = (server) => {

    server.post("/api/expense" , createExpense );
    server.get("/api/expense" , getExpense );
    server.get("/api/expense/category" , getExpenseByCategory );
}

module.exports = ExpenseRoutes