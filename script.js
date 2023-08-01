let copied = false; // Flag to track if the password was copied

// Function to generate a random password
function generatePassword() {
    const selectedWords = [];
    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * wordList.length);
        selectedWords.push(wordList[randomIndex]);
    }
    const password = selectedWords.join("-");
    copied = false; // Reset the copied flag when generating a new password
    updatePasswordField(password);
}

// Function to update the password field
function updatePasswordField(password) {
    const passwordField = document.getElementById("generatedPassword");
    passwordField.value = password;
    updateStatusIcon(); // Update the status icon after updating the password field
}

// Function to copy the generated password to the clipboard
function copyToClipboard() {
    const passwordField = document.getElementById("generatedPassword");
    passwordField.select();
    document.execCommand("copy");
    copied = true;
    updateStatusIcon();
}

function updateStatusIcon() {
    const statusIcon = document.getElementById("statusIcon");
    if (copied) {
        statusIcon.innerHTML = 'Password copied!';
        statusIcon.style.color = '#46b946';
    } else {
        statusIcon.innerHTML = 'Password not copied';
        statusIcon.style.color = '#f5a623';
    }
}

// Event listeners
const generateButton = document.getElementById("generateButton");
generateButton.addEventListener("click", generatePassword);

const copyButton = document.getElementById("copyButton");
copyButton.addEventListener("click", copyToClipboard);
