import express from "express";
import { createNoteController, getAllNoteController, updateNoteController } from "../controllers/note.controllers.js";

let router = express.Router();

router.post("/create", createNoteController);
router.get("/", getAllNoteController);
router.patch('/update/:id', updateNoteController)

export default router;
