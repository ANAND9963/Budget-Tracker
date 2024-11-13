const {createCategory} = require('./CategoryController');

const CategoryRoutes = (server) => {

    server.post("/api/category" , createCategory );
}

module.exports = CategoryRoutes