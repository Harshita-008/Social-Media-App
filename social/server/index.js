import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Connect to MongDb
connectDB();

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
// app.get("/", (req, res) => {
//   res.send("Welcome to the Social Media API");
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 