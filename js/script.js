function updateGreeting() {
    const name = document.getElementById("name").value;
    const welcomeMessage = document.getElementById("welcome-message");
    if (name) {
        welcomeMessage.textContent = `Hi ${name}, Welcome To Website`;
    } else {
        welcomeMessage.textContent = "Hi, Welcome To Website";
    }
}

function validateForm() {
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    if (name === "") {
        alert("Nama harus diisi!");
        return false;
    }
    if (message === "") {
        alert("Pesan harus diisi!");
        return false;
    }
    alert(`Pesan Anda: ${message}`);
    return true;
}
