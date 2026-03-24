async function sendMessage() {
  const inputField = document.getElementById("input");
  const message = inputField.value;

  if (!message) return;

  const chatBox = document.getElementById("chat-box");

  // Show user message
  chatBox.innerHTML += `<p><b>You:</b> ${message}</p>`;

  inputField.value = "";

  try {
    const res = await fetch("http://localhost:3000/api/concierge/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();

    chatBox.innerHTML += `<p><b>AI:</b> ${data.reply}</p>`;
  } catch (error) {
    chatBox.innerHTML += `<p><b>AI:</b> Error connecting to server</p>`;
  }
}
