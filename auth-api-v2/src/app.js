import express from "express";
import NoteModel from "./model/note.model.js";

let app = express();
app.use(express.json());

app.post("/api/notes/create", async (req, res) => {
  try {
    let { title, description } = req.body;
    console.log(req.body);

    // validation
    if (!title || !description) {
      return res.status(400).json({
        message: "title and description are required",
      });
    }

    if (title.trim().length < 3 || description.trim().length < 10) {
      return res.status(400).json({
        message:
          title.trim().length < 3
            ? "title must be at least 3 character long"
            : "description must be at least 10 character long",
      });
    }

    let newNote = await NoteModel.create({
      title,
      description,
    });

    return res.status(201).json({
      message: "note created successfully",
      note: newNote,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});

app.get("/api/notes", async (req, res) => {
  try {
    let allNotes = await NoteModel.find();

    return res.status(200).json({
      message: "Notes fetched successfully",
      notes: allNotes,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});

export default app;
