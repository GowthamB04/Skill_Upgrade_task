// script.js

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const messageDiv = document.getElementById('message');
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    const closeBtn = document.getElementsByClassName('close')[0];
    
    if (!name || !email) {
        messageDiv.textContent = 'Please fill in all fields.';
        messageDiv.style.color = 'red';
    } else {
        messageDiv.textContent = '';
        popupMessage.textContent = 'Form submitted successfully!';
        popup.style.display = 'block';
    }

    // Close the modal when the user clicks on <span> (x)
    closeBtn.onclick = function() {
        popup.style.display = 'none';
    }

    // Close the modal when the user clicks anywhere outside of the modal
    window.onclick = function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    }
});
