async function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    const chatbox = document.getElementById("chatbox");

    if (userInput.trim() === "") {
        return;  // Don't send empty messages
    }

    // Display user message
    chatbox.innerHTML += `<div class="user-message">${userInput}</div>`;
    document.getElementById("user-input").value = '';  // Clear input field

    // Scroll to the bottom
    chatbox.scrollTop = chatbox.scrollHeight;

    // Fetch bot response from Flask
    fetchBotResponse(userInput);
}

async function fetchBotResponse(userMessage) {
    const chatbox = document.getElementById("chatbox");

    try {
        const response = await fetch(`/chatbot?message=${encodeURIComponent(userMessage)}`);
        const data = await response.json();

        // Display bot message
        chatbox.innerHTML += `<div class="bot-message">${data.response}</div>`;
        chatbox.scrollTop = chatbox.scrollHeight;
    } catch (error) {
        chatbox.innerHTML += `<div class="bot-message">Sorry, I couldn't understand that.</div>`;
        chatbox.scrollTop = chatbox.scrollHeight;
    }
}
