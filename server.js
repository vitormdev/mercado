import express from "express";
import cors from "cors";
import "dotenv/config";

const PORT = process.env.API_PORT || 3000;

const api = express();

api.use(express.json());
api.use(cors());

routes.forEach((route) => {
  api.use(route.path, route.router);
});

api.listen(PORT, () => {
  console.log(`API running: http://localhost:${PORT}`);
});

api.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});
