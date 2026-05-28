import express from "express";
import { createNoteController, getAllNoteController } from "../controllers/note.controllers.js";

let router = express.Router();

router.post("/create", createNoteController);
router.get("/", getAllNoteController)

export default router;
