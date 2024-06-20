import { Auther } from "../../../detabase/models/auther.model.js"



const addAuther =async(req,res)=>{
    try{
        const auther = await Auther.insertMany(req.body);
        res.status(201).json({message : "Success Added" , auther})
    }catch(error){
        res.status(404).json({error : error.message})
    }
}
const getAuther =async(req,res)=>{
    let {page =1 , limit = 3 , search =''} = req.query;
    page = parseInt(page);
    limit = parseInt(limit)
    
    try{
        const query = search ? { $or: [{ name: { $regex: search}}, { bio: { $regex: search} }] } : {};

        const authers = await Auther.find(query).populate('books' , '-_id')
        .limit(limit)
        .skip((page -1) * limit)
        .exec()
        const count = await Auther.countDocuments(query)
        res.status(201).json({ authers, totalPages: Math.round(count / limit), currentPage: page })
    }catch(error){
        res.status(404).json({error : error.message})
    }
}
const specificAuther =async(req,res)=>{
    try{
        const {id} = req.params;
        const auther = await Auther.findById(id).populate('books' ,'-_id');
        res.status(201).json({message : "Success" , auther})
    }catch(error){
        res.status(404).json({error : error.message})
    }
}
const UpdateAuther =async(req,res)=>{
    try{
        const{id} = req.params;
        const{body} = req.body
        const auther = await Auther.findByIdAndUpdate(id , body);
        res.status(201).json({message :"Success Updated..",auther})
    }catch(error){
        res.status(404).json({error : error.message})
    }
}
const deleteAuther =async(req,res)=>{
    try{
        const{id} = req.params;
        const auther = await Auther.findByIdAndDelete(id );
        res.status(201).json({message :"Success Updated..",auther})
    }catch(error){
        res.status(404).json({error : error.message})
    }
}


export {
    addAuther,
    getAuther,
    specificAuther,
    deleteAuther,
    UpdateAuther
}