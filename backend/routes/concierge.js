import express from "express";
import { getAIResponse } from "../services/aiService.js";

const router = express.Router();

router.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const reply = await getAIResponse(message);

    res.json({ reply });
  } catch (error) {
    console.error(error);
    res.status(500).json({ reply: "Server error" });
  }
});

export default router;
