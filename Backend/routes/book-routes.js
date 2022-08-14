const express = require("express");
const Book = require("../model/Book");
const router = express.Router();
const Product = require("../model/Book")

//This route provide all the books
router.get("/" , async (req,res,next) => {
    
    let books;
    try{
        books = await Book.find();
    } catch(err) {
        console.log(err);
    }

    if(!books) {

        return res.status(400).json({messege:"No Product Found"});
    }

       return res.status(200).json({books})

} );

module.exports = router;
