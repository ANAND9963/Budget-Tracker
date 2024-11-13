const {createExpense} = require('./ExpenseController');

const ExpenseRoutes = (server) => {

    server.post("/api/expense" , createExpense );
}

module.exports = ExpenseRoutes