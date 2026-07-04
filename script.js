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

        <h2>Do You Love Me? 🥺❤️</h2>

        <button onclick="yesClick()">
        YES ❤️
        </button>

        <br><br>

        <button id="noBtn"
        onmouseover="moveButton()"
        ontouchstart="moveButton()">
        NO 💔
        </button>

        <audio id="loveMusic">
        <source src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3" type="audio/mpeg">
        </audio>

    </div>
    `;
window.yesClick = function () {
    alert("YES clicked ❤️");
}

window.moveButton = function () {
    let btn = document.getElementById("noBtn");
    btn.style.position = "absolute";
    btn.style.left = Math.random() * 80 + "%";
    btn.style.top = Math.random() * 80 + "%";
}
