import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/health", (_req, res) => res.send("ok"));

const port = process.env.PORT || 3009;
app.listen(port, () => console.log(`API listening on :${port}`));
