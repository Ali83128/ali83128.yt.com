// Show the pop-up after a delay
window.onload = function() {
    setTimeout(() => {
        document.getElementById('popup').style.display = 'block';
    }, 3000); // Show pop-up after 3 seconds
};

// Function to close the pop-up
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Join WhatsApp function
function joinWhatsApp() {
    window.location.href = "https://chat.whatsapp.com/your-group-link"; // Replace with your WhatsApp link
}
