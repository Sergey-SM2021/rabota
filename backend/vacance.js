import mongoose from "mongoose";

const vacance = new mongoose.Schema({
    title: String,
    price: Number,
    skills: [String],
    isDistantWork: Boolean,
    phone:Number,
    description: String
})

export default mongoose.model("Vacance", vacance);
