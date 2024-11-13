
const Category = require("./CategoryModel");


const createCategory = async (req,res) => {
    const data = req.body;
    try{

        const category = await Category.create(data);
        res.status(202).json({category});


    }catch(error){
        console.log("error while inserting data");
        
    }
}



module.exports = {createCategory};