import exp from "express";
import mongoose from "mongoose";
import { empRoute } from "./APIs/EmpApi.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = exp();

// cors config
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      process.env.FRONTEND_URL,
    ].filter(Boolean),
  })
);

// parser
app.use(exp.json());

// test endpoint
app.get("/", (req, res) => {
  res.send("API is running...");
});

// api routes
app.use("/emp-api", empRoute);

// 404 handler
app.use((req, res, next) => {
  return res.status(404).json({
    message: `path ${req.url} is invalid`
  });
});

// error handler
app.use((err, req, res, next) => {
  console.log(err.name);

  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation error",
      error: err.message
    });
  }

  if (err.name === "CastError") {
    return res.status(400).json({
      message: "Invalid ObjectId",
      error: err.message
    });
  }

  if (err.name === "MongoServerError" && err.code === 11000) {
    return res.status(409).json({
      message: "No duplicate entries allowed",
      error: err.keyValue
    });
  }

  res.status(500).json({ message: "Server side error" });
});

// db connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to MongoDB");

    if (process.env.NODE_ENV !== "production") {
      const PORT = process.env.PORT || 6001;
      app.listen(PORT, () =>
        console.log(`Server running on port ${PORT}`)
      );
    }
  } catch (err) {
    console.error("DB connection failed:", err.message);
  }
};

connectDB();

export default app;