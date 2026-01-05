import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb://localhost:27017/simple-login-website",
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDb;

