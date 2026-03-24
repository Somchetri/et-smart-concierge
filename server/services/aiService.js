async function getAIResponse(message) {
  // Mock AI logic (replace with OpenAI API later)

  if (message.toLowerCase().includes("invest")) {
    return "Based on your goals, you can explore mutual funds or SIPs.";
  }

  if (message.toLowerCase().includes("insurance")) {
    return "You may need health and life insurance coverage.";
  }

  return "Tell me more about your financial goals.";
}

module.exports = { getAIResponse };
