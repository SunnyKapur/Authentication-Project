import mongoose from "mongoose";

let noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

let NoteModel = mongoose.model("notes", noteSchema)

export default NoteModel
