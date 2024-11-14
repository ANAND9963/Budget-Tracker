
const Category = require("./CategoryModel");

const getCategory = async (req, res) => {

    try{
        const allcategories = await Category.find().select({_id : 0, title : 1});
        res.status(202).json(allcategories);

    }catch(error){
        console.log("error getting categories",error);
        res.status(500).json({ message: "Server error while fetching ." });
        
    }
}


const createCategory = async (req,res) => {
    const data = req.body;
    try{

        const category = await Category.create(data);
        res.status(202).json(category);


    }catch(error){
        console.log("error while inserting data",error);
        res.status(500).json({ message: "Server error while fetching ." });
        
    }
}






module.exports = {createCategory , getCategory};