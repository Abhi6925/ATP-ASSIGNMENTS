import { connect } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const dbUrl = process.env.DB_URL || "mongodb+srv://dhairya:dhairya_041@cluster0.fij6bmw.mongodb.net/blogApp?retryWrites=true&w=majority&appName=Cluster0";

console.log("Testing connection to:", dbUrl.replace(/:([^@]+)@/, ":****@"));

async function test() {
    try {
        await connect(dbUrl, { serverSelectionTimeoutMS: 5000 });
        console.log("SUCCESS: Connected to MongoDB!");
        process.exit(0);
    } catch (err) {
        console.error("FAILURE: Could not connect to MongoDB");
        console.error("Error name:", err.name);
        console.error("Error message:", err.message);
        process.exit(1);
    }
}

test();
