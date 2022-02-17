import mongoose from "mongoose";

const Resume = new mongoose.Schema({
        name: String,
        surename: String,
        number: String,
        skills: [String],
        experience: String,

        profession: String,
        description: String,
        skillLavel: String,
        gmail: String,
        sity: String,
        country: String
})

export default mongoose.model("Resume", Resume)