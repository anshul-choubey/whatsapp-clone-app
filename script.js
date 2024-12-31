// script.js

document.getElementById("send-button").addEventListener("click", sendMessage);
document
  .getElementById("message-input")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });

function sendMessage() {
  const messageInput = document.getElementById("message-input");
  const messageText = messageInput.value.trim();

  if (messageText === "") return;

  // Append the user's sent message
  const chatBox = document.getElementById("chat-box");
  const messageElement = document.createElement("div");
  messageElement.classList.add("message", "sent");
  messageElement.innerHTML = `
        <span class="message-text">${messageText}</span>

        <span class="message-time">${getCurrentTime()}</span>
    `;
  chatBox.appendChild(messageElement);

  // Scroll to the latest message
  chatBox.scrollTop = chatBox.scrollHeight;

  // Clear input field
  messageInput.value = "";

  // Simulate bot response after 1 second
  setTimeout(() => {
    const botMessage = `Bot: ${messageText + "  "}`;
    const responseElement = document.createElement("div");
    responseElement.classList.add("message", "received");
    responseElement.innerHTML = `
            <span class="message-text">${botMessage + "   "}</span>
            <span class="message-time">${getCurrentTime()}</span>
        `;
    chatBox.appendChild(responseElement);

    // Scroll to the latest message again after the bot responds
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 1000);
}

// Function to get current time for message timestamps
function getCurrentTime() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return "  " + `  ${hours}:${minutes}`;
}
