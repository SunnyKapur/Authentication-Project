import express from "express";
import { createNoteController } from "../controllers/note.controllers";

let router = express.Router();

router.post("/", createNoteController);

export default router;
