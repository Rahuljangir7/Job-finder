import dotenv from "dotenv";
import express from "express";
import dbConnect from "./db/connect.js";
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

let PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listing Port on ${PORT}`);
});
