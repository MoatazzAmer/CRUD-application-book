import { Schema, model } from "mongoose";


const schema = new Schema({
    title : {
        type : String,
        required : true
    } ,
    content : {
        type : String,
        required : true
    },
    auther : {
        type : String,
        required : true
    },
    publishedDate : {
        type : Date,
        default : Date.now
    }
},
{
    versionKey : false
});

export const Book = model('Book' , schema)