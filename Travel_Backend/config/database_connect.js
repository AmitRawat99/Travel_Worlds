import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

async function ConnectDb() {
  try {
    if (!process.env.MONGO) {
      throw new Error("MONGO is undefined in environment variable");
    }

    // Actual connection
    
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connect Your Database ✅");
  } catch (error) {
    console.error("❌ Database Connection Error:", error.message);
    process.exit(1);
  }
}

export default ConnectDb;
