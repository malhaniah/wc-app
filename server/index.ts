import express from "express";
import cors from "cors";
import { config } from "dotenv";
import router from "./routers";
const app = express();

async function main() {
  config(); // Load .env file

  app.use(cors()); // Enable CORS
  app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
  app.use(router); // Use router

  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
}

main();
