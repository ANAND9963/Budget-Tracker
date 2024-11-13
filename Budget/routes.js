
const {createBudget} = require('./BudgetController')

const budgetRoutes = (server) => {

    

    server.post('/api/budget' , createBudget);
    // server.get('/api/budget' , getBudgets);
    

}


module.exports = budgetRoutes;

