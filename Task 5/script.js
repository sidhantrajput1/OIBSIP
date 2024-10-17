// document.getElementById("feedbackForm").addEventListener("submit", function(event) {
//     event.preventDefault();

//     const name = document.getElementById("name").value;
//     const message = document.getElementById("message").value;

//     const messagesDiv = document.getElementById("messages");
//     const newMessage = document.createElement("div");
//     newMessage.classList.add("message");
//     newMessage.innerHTML = `<strong>${name}:</strong> ${message}`;
//     messagesDiv.appendChild(newMessage);

//     // Clear the form fields
//     document.getElementById("feedbackForm").reset();
// });

// document.getElementById("feedbackForm").addEventListener("submit", function(event) {
//     const confirmationMessage = document.getElementById("confirmationMessage");
//     confirmationMessage.innerHTML = `Thank you! Your message has been sent.`;
//     confirmationMessage.style.display = "block";
// });


document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    // Send the data to Formspree
    fetch("https://formspree.io/f/mdkooyzy", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: name, message: message })
    })
    .then(response => {
        if (response.ok) {
            // Show confirmation message
            document.getElementById("messages").innerHTML = `Thank you, ${name}! Your message has been sent.`;
            document.getElementById("messages").style.color = "green";
            // Clear the form fields
            document.getElementById("feedbackForm").reset();
        } else {
            document.getElementById("messages").innerHTML = "There was an error sending your message.";
            document.getElementById("messages").style.color = "red";
        }
    })
    .catch(error => {
        document.getElementById("messages").innerHTML = "There was an error sending your message.";
        document.getElementById("messages").style.color = "red";
    });
});
