import { Router } from "express";
import { UpdateAuther, addAuther, deleteAuther, getAuther, specificAuther } from "./auther.controller.js";




const autherRouter = Router();
autherRouter.route('/' ).post(addAuther).get( getAuther) 
autherRouter.route('/:id').get(specificAuther) .patch(UpdateAuther).delete(deleteAuther) 


export default autherRouter