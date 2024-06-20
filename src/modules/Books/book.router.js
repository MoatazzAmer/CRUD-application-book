import { Router } from "express";
import { addBook, deleteBook,  getAllBooksWithPagination, specificBook, updateBook } from "./book.controller.js";




const bookRouter = Router();

bookRouter.route('/').post(addBook).get(getAllBooksWithPagination)
bookRouter.route('/:id').get(specificBook).patch(updateBook).delete(deleteBook)

export default bookRouter