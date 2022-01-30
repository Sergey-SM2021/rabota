import mongoose from "mongoose";

const Resume = new mongoose.Schema({
    name:{type:String,required:true},
    surename:{type:String,required:true},
    number:{type:Number,required:true},
    skills:[
        {type:String,required:false}
    ],
    data:{type:String,required:false},
    experience:{type:String,required:true}
})

export default mongoose.model("Resume", Resume)