const express = require("express");
const router = express.Router();

const { getAIResponse } = require("../services/aiService");

router.post("/chat", async (req, res) => {
  const { message } = req.body;

  const reply = await getAIResponse(message);

  res.json({ reply });
});

module.exports = router;
