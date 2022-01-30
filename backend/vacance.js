import mongoose from "mongoose";

const vacance = new mongoose.Schema({
    skills: [String],
    vacance: String,
    price: "Number",
    description: String
})

export default mongoose.model("Vacance", vacance);
