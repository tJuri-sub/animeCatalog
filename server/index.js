import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import userRouter from "./routers/userRouter.js";
import animeRouter from "./routers/animeRouter.js";
import contactRouter from "./routers/contactRouter.js";

dotenv.config();
const app = express();

const corsOption = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOption));
app.use(cookieParser());

app.use("/user", userRouter);
app.use("/anime", animeRouter);
app.use("/contact", contactRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to Database"))
  .catch((error) => console.log(`Database error connection ${error}`));

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Port running on ${port}`);
});
