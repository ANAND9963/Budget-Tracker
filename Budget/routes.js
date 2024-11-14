
const {createBudget, getBudget, getBudgetSummary} = require('./BudgetController')

const budgetRoutes = (server) => {
    server.post('/api/budget' , createBudget);
    server.get('/api/budget' , getBudget);  
    server.get('/api/budget/summary/:id' , getBudgetSummary);  

}


module.exports = budgetRoutes;

