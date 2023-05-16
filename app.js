const nameModal = document.getElementById("name-modal");
const nameInput = document.getElementById("name-input");
const enterButton = document.getElementById("enter-button");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");
const emojiContainer = document.querySelector(".emoji-container");

let username;

// Show name modal on page load
window.onload = function() {
  nameModal.style.display = "flex";
};

// Enter button handler
enterButton.onclick = function() {
  if (nameInput.value === "") {
    alert("Name cannot be empty!");
    return;
  }
  username = nameInput.value;
  nameModal.style.display = "none";
};

// Send button handler
sendButton.onclick = function() {
  if (messageInput.value === "") {
alert("Message cannot be empty!");
return;
}

// Create message element and add to message container
const messageContainer = document.querySelector(".message-container");
const messageElement = createMessageElement(username, messageInput.value);
messageContainer.appendChild(messageElement);

// Clear message input
messageInput.value = "";
};

// Emoji container click handler
emojiContainer.onclick = function(event) {
const emojiElements = emojiContainer.querySelectorAll(".emoji");
for (let i = 0; i < emojiElements.length; i++) {
emojiElements[i].classList.remove("active-emoji");
}
if (event.target.classList.contains("emoji")) {
event.target.classList.add("active-emoji");
messageInput.value += event.target.innerHTML;
}
};

// Helper function to create new message element
function createMessageElement(name, message) {
const messageElement = document.createElement("div");
messageElement.classList.add("message");

const nameElement = document.createElement("span");
nameElement.classList.add("message-name");
nameElement.innerHTML = name + ":";

const textElement = document.createElement("span");
textElement.classList.add("message-text");
textElement.innerHTML = message;

messageElement.appendChild(nameElement);
messageElement.appendChild(textElement);

return messageElement;
}
