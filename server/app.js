import dotenv from "dotenv";
import express from "express";
import dbConnect from "./db/connect.js";
let PORT = process.env.PORT;

dotenv.config();
dbConnect();

const app = express();

// middlewares

// routes

app.get("/", (req, res) => {
  res.send(`Welcome to jobfinder`);
});

app.listen(PORT, () => {
  console.log(`Listing Port on ${PORT}`);
});
