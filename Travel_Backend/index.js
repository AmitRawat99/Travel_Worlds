import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import ConnectDb from "./config/database_connect.js";
import tourRouter from "./Routers/tours.js";
import userRouter from "./Routers/user.js";
import authRouter from "./Routers/auth.js";
import reviewRouter from "./Routers/reviews.js";
import bookingRouter from "./Routers/booking.js";

dotenv.config();
ConnectDb();

const app = express();
const port = process.env.PORT || 6500;
const corsOption = {
  origin: "http://localhost:4173" || "http://localhost:4173" || "https://travel-worlds-frontend.onrender.com",
  credentials: true,
  methods: ["POST", "GET", "DELETE"],
};

// middleware

app.use(cors(corsOption));
app.use(cookieParser());
app.use(express.json());
app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/review", reviewRouter);
app.use("/api/v1/booking", bookingRouter);

// make router for test

app.get("/", (req, res) => {
  res.send("hey");
});

// start server

app.listen(port, () => {
  console.log(`run this server http://localhost:${port}`);
});
