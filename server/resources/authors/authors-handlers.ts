import type { Request, Response } from "express";
import { AuthorModel } from "./authors-model";

export async function getAuthors(req: Request, res: Response) {
  const authors = await AuthorModel.find({});
  res.status(200).json(authors);
}

export async function createAuthors(req: Request, res: Response) {
  const author = await AuthorModel.create(req.body);
  res.status(201).json(author);
}
