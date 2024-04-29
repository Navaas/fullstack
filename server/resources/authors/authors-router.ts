import express from "express";
import { createAuthors, getAuthors } from "./authors-handlers";

export const authorsRouter = express.Router();

authorsRouter.get("/", getAuthors);
authorsRouter.post("/", createAuthors);
