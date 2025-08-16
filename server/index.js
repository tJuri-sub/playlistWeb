import express, { json } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import userRouter from "./router/userRouter/usersRouter.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 8000;

//MongoDB connection
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("Database is Connected"))
//   .catch((error) => console.log(`Database error connection ${error}`));

//Routers
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
