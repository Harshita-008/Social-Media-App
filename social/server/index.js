import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRouter from "./routes/user.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Connect to MongDb
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRouter);

// app.get("/", (req, res) => {
//   res.send("Welcome to the Social Media API");
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 