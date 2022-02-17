import mongoose from "mongoose";

const vacance = new mongoose.Schema({
    title: String,
    price: Number,
    skills: [String],
    isDistantWork: Boolean
})

export default mongoose.model("Vacance", vacance);
