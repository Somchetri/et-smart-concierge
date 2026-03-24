async function sendMessage() {
  const input = document.getElementById("input").value;

  const res = await fetch("http://localhost:3000/api/concierge/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message: input })
  });

  const data = await res.json();

  document.getElementById("response").innerText = data.reply;
}
