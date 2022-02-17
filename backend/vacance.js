import mongoose from "mongoose";

const vacance = new mongoose.Schema({
    title: String,
    price: Number,
    skills: [String],
    isDistantWork: Boolean,
    phone:Number
})

export default mongoose.model("Vacance", vacance);
