import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import userRouter from "./routers/userRouter.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", userRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to Database"))
  .catch((error) => console.log(`Database error connection ${error}`));

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Port running on ${port}`);
});
