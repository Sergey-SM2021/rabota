import { Router } from "express"
import VacanceController from "../controllers/VacanceController.js"

const router = Router()

router.post("/create", VacanceController.create)

router.get("/", VacanceController.get)

export default router