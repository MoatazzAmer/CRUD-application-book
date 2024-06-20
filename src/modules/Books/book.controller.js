import { query } from "express";
import { Book } from "../../../detabase/models/book.model.js";




const addBook =async(req,res)=>{
    const {title , content , auther , publishedDate} = req.body
    try{
        const book= await Book.insertMany({title ,content , auther , publishedDate});

        res.status(201).json({message : "Success Added" , book})
    }catch(error){
        res.status(404).json({error : error.message})
    }
}

const getAllBooksWithPagination =async(req,res)=>{
    let {page = 1 , limit = 5 , search ='' } = req.query;
    page = parseInt(page);
    limit = parseInt(limit)
    try{
        const query = search ? { $or:[{ title:{$regex: search}},{auther:{$regex:search}}]}:{};


        const books = await Book.find(query)
        .limit(limit)
        .skip((page -1) * limit)
        .exec()
        const count = await Book.countDocuments(query);
        res.status(201).json({books, totalPages: Math.round(count / limit), currentPage: page })
    }catch(error){
        res.status(404).json({error : error.message})
    }
}

const specificBook =async(req,res)=>{
    try{
        const{id}=req.params
        const book = await Book.findById(id);
        res.status(201).json({message : "Success ..." , book})
    }catch(error){
        res.status(404).json({error : error.message})
    }
}

const updateBook =async(req,res)=>{
    try{
        const{id} = req.params;
        const{body} = req.body
        const books = await Book.findByIdAndUpdate(id , body);
        res.status(201).json({message : "Success Updated" , books})
    }catch(error){
        res.status(404).json({error : error.message})
    }
}


const deleteBook =async(req,res)=>{
    try{
        const{id} = req.params;
        const books = await Book.findByIdAndDelete(id);
        res.status(201).json({message : "Success Deleted" , books})
    }catch(error){
        res.status(404).json({error : error.message})
    }
}
export {
    addBook,
    getAllBooksWithPagination,
    specificBook,
    updateBook,
    deleteBook
}