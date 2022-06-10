import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import cloudinary from "cloudinary";
import fileUpload from "express-fileupload";
import User from "./routes/userRoute.js";
import { ConnectDB } from "./config/db.js";
import colors from "colors";

dotenv.config();

//connect database
ConnectDB();

export const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//for static upload image in local
app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
    useTempFiles: true,
  })
);

//for cloudinary server
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//routes
app.use("/api/v1", User);

app.get("/", (req, res) => {
  res.send("Server is working");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`.cyan.underline.bold);
});
