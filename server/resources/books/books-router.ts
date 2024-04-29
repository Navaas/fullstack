import express from "express";
import { createBooks, getBooks } from "./books-handlers";

export const booksRouter = express.Router();

booksRouter.get("/", getBooks);
booksRouter.post("/", createBooks);
