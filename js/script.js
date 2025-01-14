function updateGreeting() {
    const name = document.getElementById("name").value;
    const welcomeMessage = document.getElementById("welcome-message");
    if (name) {
        welcomeMessage.textContent = `Hi ${name}, Welcome To Website`;
    } else {
        welcomeMessage.textContent = "Hi, Welcome To Website";
    }
}

function validateForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const birthDate = document.getElementById("birthdate").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById("message").value;

    if (name === "") {
        alert("Nama harus diisi!");
        return false;
    }
    if (message === "") {
        alert("Pesan harus diisi!");
        return false;
    }

    updateGreeting();

    alert(`Nama: ${name}\nTanggal Lahir: ${birthDate}\nJenis Kelamin: ${gender}\nPesan: ${message}`);

    const displayData = document.getElementById("displayData");
    displayData.innerHTML = `Nama: ${name}<br>Tanggal Lahir: ${birthDate}<br>Jenis Kelamin: ${gender}<br>Pesan: ${message}`;

    return true;
}

