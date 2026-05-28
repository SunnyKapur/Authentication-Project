import express from "express";
import {
  createNoteController,
  deleteNoteController,
  getAllNoteController,
  updateNoteController,
} from "../controllers/note.controllers.js";

let router = express.Router();

router.post("/create", createNoteController);
router.get("/", getAllNoteController);
router.patch("/update/:id", updateNoteController);
router.delete("/delete/:id", deleteNoteController);

export default router;
