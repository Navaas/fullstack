import mongoose, { Schema, SchemaTypes, type InferSchemaType } from "mongoose";

const BookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: SchemaTypes.ObjectId, ref: "Author", required: true },
  isbn: { type: String, required: true },
  publishDate: { type: Date, required: true },
  createdAt: { type: Date, default: new Date() },
});

export type Book = InferSchemaType<typeof BookSchema>;
export const BookModel = mongoose.model("Book", BookSchema);
