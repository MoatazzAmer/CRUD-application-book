import mongoose from "mongoose";



export const dbConnection = mongoose.connect('mongodb://localhost:27017/Applicarion-Books').then(()=>{
    console.log('Database Connected Successfuly ');
}).catch(()=>{
    console.log('Error In Database');
});