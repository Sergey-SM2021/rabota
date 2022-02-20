import mongoose from "mongoose";

const Resume = new mongoose.Schema({
        personalDate: {
                name: String,
                phone: Number,
                surename: String,
                mail: String,
                sity: String,
                country: String,
        },
        skills: {
                description: String,
                profession: String,
                skillLavel: String,
                technologyStack: [String],
                experience: String,
        },
        portfolio: [String],
})

export default mongoose.model("Resume", Resume)