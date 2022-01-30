import { Router } from "express";
import PostController from "../controllers/PostController.js";

let router = Router()

router.post("/create", PostController.createResume)

router.get("/find", PostController.getResumes)

router.get("/findById/:id", PostController.getResumeById)

export default router;
