import dotenv from "dotenv";
import express from "express";
import dbConnect from "./db/connect.js";
let PORT = process.env.PORT || 3000;
import userRouter from "./routes/userRouter.js";

dotenv.config();
dbConnect();

const app = express();

app.use(express.json());
// middlewares

// routes

app.get("/", (req, res) => {
  res.send(`Welcome to jobfinder`);
});

app.use("/auth", userRouter);

app.listen(PORT, () => {
  console.log(`Listing Port on ${PORT}`);
});
