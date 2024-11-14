const {createCategory, getCategory} = require('./CategoryController');

const CategoryRoutes = (server) => {

    server.post("/api/category" , createCategory );
    server.get("/api/category" , getCategory );
}

module.exports = CategoryRoutes