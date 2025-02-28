const sendMessage = (userMessage) => {
    fetch("http://127.0.0.1:8000/chat/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if (data.response) {
            setBotResponse(data.response);
        } else {
            throw new Error("Invalid response format");
        }
    })
    .catch(error => console.error("Error sending message:", error));
};
