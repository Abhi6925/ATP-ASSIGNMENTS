import exp from "express";
import { config } from "dotenv";
import { connect } from "mongoose";
import { userApp } from "./APIs/UserAPI.js";
import { authorApp } from "./APIs/AuthorAPI.js";
import { adminApp } from "./APIs/AdminAPI.js";
import { commonApp } from "./APIs/CommonAPI.js";
import cookieParser from "cookie-parser";
import cors from "cors";
config();

//create express app
const app = exp();
//enable cors
app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL,
      "http://localhost:5173",
      "http://localhost:5174",
      "https://frontend-eta-six-29.vercel.app",
      "https://atp-week-7-blog-app--main.vercel.app"
    ].filter(Boolean),
    credentials: true,
  }),
);
//add cookie parser middeleware
app.use(cookieParser());
//body parser middleware
app.use(exp.json());

import mongoose from 'mongoose';

mongoose.set('strictQuery', false);
// Disable buffering so errors occur immediately instead of timing out
mongoose.set('bufferCommands', false); 

let isConnected = false;

const connectDB = async () => {
  if (isConnected || mongoose.connection.readyState >= 1) {
    isConnected = true;
    return;
  }

  try {
    const dbUrl = process.env.DB_URL;
    if (!dbUrl) {
      console.error("DB_URL is not defined in environment variables");
      return;
    }

    console.log("Connecting to DB URL:", dbUrl.replace(/:([^@]+)@/, ":****@"));
    
    await mongoose.connect(dbUrl, {
      serverSelectionTimeoutMS: 5000,
    });
    isConnected = true;
    console.log("DB server connected successfully");
    lastDbError = null;
  } catch (err) {
    console.error("Critical error in DB connect:", err.message);
    lastDbError = err.message;
    throw err;
  }
};

// Add middleware to ensure connection is active before ANY routes
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    res.status(500).json({ error: "Database connection failed", details: err.message });
  }
});
//path level middlewares
app.use("/user-api", userApp);
app.use("/author-api", authorApp);
app.use("/admin-api", adminApp);
app.use("/auth", commonApp);

let lastDbError = null;

import { MongoClient } from "mongodb";

// Diagnostic route
app.get("/status", (req, res) => {
  const maskedDbUrl = process.env.DB_URL ? process.env.DB_URL.replace(/:([^@]+)@/, ":****@") : null;
  res.json({
    status: "ok",
    dbConnected: mongoose.connection?.readyState === 1,
    lastError: lastDbError,
    envVars: {
      hasDbUrl: !!process.env.DB_URL,
      hasFrontendUrl: !!process.env.FRONTEND_URL,
      hasSecretKey: !!process.env.SECRET_KEY,
    },
    maskedDbUrl,
    nodeVersion: process.version,
  });
});

app.get("/test-raw", async (req, res) => {
  try {
    const dbUrl = "mongodb+srv://dhairya:dhairya_041@cluster0.fij6bmw.mongodb.net/blogApp?retryWrites=true&w=majority&appName=Cluster0";
    const client = new MongoClient(dbUrl, { serverSelectionTimeoutMS: 5000 });
    await client.connect();
    await client.db("blogApp").command({ ping: 1 });
    await client.close();
    res.json({ success: true, message: "Raw MongoDB connection successful!" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message, stack: err.stack });
  }
});

// We will place it before the routes

//to handle invalid path
app.use((req, res, next) => {
  console.log(req.url);
  res.status(404).json({ message: `path ${req.url} is invalid` });
});

  //Error handling middleware
  app.use((err, req, res, next) => {
    console.log("error is ", err);
    
    // Handle Mongoose Validation Error
    if (err.name === "ValidationError") {
      return res
        .status(400)
        .json({ message: "Validation error", error: err.message });
    }

    // Handle Mongoose Cast Error (invalid ID)
    if (err.name === "CastError") {
      return res
        .status(
          
          400)
        .json({ message: "Invalid ID format", error: err.message });
    }

    // Handle MongoDB Duplicate Key Error (11000)
    const errCode = err.code ?? err.cause?.code ?? err.errorResponse?.code;
    if (errCode === 11000) {
      const keyValue = err.keyValue ?? err.cause?.keyValue ?? err.errorResponse?.keyValue;
      const field = keyValue ? Object.keys(keyValue)[0] : "field";
      const value = keyValue ? keyValue[field] : "unknown";
      return res.status(409).json({
        message: "Duplicate key error",
        error: "An account is already registered with this email",
      });
    }

    // Handle Multer or other status-coded errors
    const statusCode = err.status || err.statusCode || 500;
    const errorMessage = err.message || "Server side error";

    res.status(statusCode).json({
      message: statusCode === 500 ? "Internal server error" : "Error occurred",
      error: errorMessage
    });
  });

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server listening on ${port}..`));

export default app;
