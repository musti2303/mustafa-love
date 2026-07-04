import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAEoKQ3khME8illclPZRZHzmBjyZhLgvzk",
  authDomain: "mustafa-love.firebaseapp.com",
  databaseURL: "https://mustafa-love-default-rtdb.firebaseio.com",
  projectId: "mustafa-love",
  storageBucket: "mustafa-love.firebasestorage.app",
  messagingSenderId: "10965905538",
  appId: "1:10965905538:web:820a56cff0567961f6049b"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function nextPage() {
    let name = document.getElementById("girlName").value.trim();

    if (name === "") {
        alert("Please enter your name ❤️");
        return;
    }

    // Save locally
    localStorage.setItem("girlName", name);

    // Save visitor in Firebase
    push(ref(db, "visitors"), {
        name: name,
        time: new Date().toLocaleString()
    });

    document.body.innerHTML = `
    <div class="container">
        <h1>❤️ Mustafa ❤️ ${name}</h1>
        <h2>Will You Be My Girlfriend? 🥹💍</h2>

        <button onclick="yesClick()">YES ❤️</button>
        <br><br>
        <button id="noBtn"
            onmouseover="moveButton()"
            ontouchstart="moveButton()">
            NO 💔
        </button>
    </div>
    `;
}

function yesClick() {

    // Save YES response
    push(ref(db, "responses"), {
        name: localStorage.getItem("girlName"),
        answer: "YES ❤️",
        time: new Date().toLocaleString()
    });

    document.body.innerHTML = `
    <div class="container">
        <h1>🥹❤️</h1>
        <h2>Yay!! ❤️</h2>
        <h3>Mustafa ❤️ ${localStorage.getItem("girlName")}</h3>
        <h2>Forever ♾️💍</h2>
    </div>
    `;
}

function moveButton() {
    let btn = document.getElementById("noBtn");

    btn.style.position = "absolute";
    btn.style.left = Math.random() * 80 + "%";
    btn.style.top = Math.random() * 80 + "%";
}

// Make functions available globally
window.nextPage = nextPage;
window.yesClick = yesClick;
window.moveButton = moveButton;
