import express from 'express'
import mongoose from "mongoose"
import cors from 'cors'
import Resume from './Router/Resume.js'
import Vacance from './Router/Vacance.js'

const app = express()

const password = "mongodb+srv://sergey:sergey2003@cluster0.zifbe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

app.use(express.json())
app.use(cors());
app.options('*', cors());
app.use("/Resume", Resume)
app.use("/vacance", Vacance)

const start = async () => {
    try {
        await mongoose.connect(password)
        app.listen(8000, () => {
            console.log('Сервак запущен')
        })
    } catch (error) {
        console.log(error)
    }
}

start()