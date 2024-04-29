import express, {
  type NextFunction,
  type Request,
  type Response,
} from "express";
import "express-async-errors";
import { booksRouter } from "./resources/books/books-router";
import mongoose, { Types } from "mongoose";
import { authorsRouter } from "./resources/authors/authors-router";

const app = express();

//ID:
/* const result = new Types.ObjectId();
console.log(result); */

app.use(express.json());
app.use("/api/books", booksRouter);
app.use("/api/authors", authorsRouter);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  res.status(500).json("Ett oväntat fel har uppstått");
});

main().catch((error) => console.error(error));

async function main() {
  await mongoose.connect(process.env.MONGO_URI!);
}
app.listen(4400, () => console.log("http://localhost:4400"));
