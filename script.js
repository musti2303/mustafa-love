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

window.nextPage = function () {

    let name = document.getElementById("girlName").value.trim();

    if (name === "") {
        alert("Please enter your name ❤️");
        return;
    }

    localStorage.setItem("girlName", name);

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

    <audio id="loveMusic">
      <source src="love.mp3" type="audio/mpeg">
    </audio>
    `;
}

window.yesClick = function () {

    const music = document.getElementById("loveMusic");

    if (music) {
        music.play();
    }

    confetti({
        particleCount: 300,
        spread: 180,
        origin: { y: 0.6 }
    });

    push(ref(db, "responses"), {
        name: localStorage.getItem("girlName"),
        response: "YES ❤️",
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

window.moveButton = function () {

    let btn = document.getElementById("noBtn");

    btn.style.position = "absolute";
    btn.style.left = Math.random() * 80 + "%";
    btn.style.top = Math.random() * 80 + "%";
}
