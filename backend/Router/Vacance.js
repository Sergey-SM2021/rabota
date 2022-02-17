import { Router } from "express"
import VacanceController from "../controllers/VacanceController.js"

const router = Router()

router.post("/create", VacanceController.create)

router.get("/", VacanceController.get)

router.get("/:id", VacanceController.getById)

export default router