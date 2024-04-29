import mongoose, { type InferSchemaType } from "mongoose";

const AuthorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  yearOfBirth: { type: Number, required: true },
});

export type Author = InferSchemaType<typeof AuthorSchema>;
export const AuthorModel = mongoose.model("Author", AuthorSchema);
