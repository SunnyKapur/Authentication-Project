import express from "express";
import { createNoteController } from "../controllers/note.controllers.js";

let router = express.Router();

router.post("/", createNoteController);

export default router;
