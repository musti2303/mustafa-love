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

const name = document.getElementById("girlName").value.trim();  

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
    <h2>Do You Love Me? ❤️🥺</h2>  

    <button onclick="yesClick()">YES ❤️</button>  

    <br><br>  

    <button id="noBtn"  
        onmouseover="moveButton()"  
        ontouchstart="moveButton()">  
        NO 💔  
    </button>  
</div>  
`;

};
window.yesClick = function () {

push(ref(db, "responses"), {  
    name: localStorage.getItem("girlName"),  
    answer: "YES ❤️",  
    time: new Date().toLocaleString()  
});  

if (typeof confetti === "function") {  
    confetti({  
        particleCount: 350,  
        spread: 180,  
        origin: { y: 0.6 }  
    });  
}  

// Rose Rain  
for (let i = 0; i < 40; i++) {  

    const rose = document.createElement("div");  

    rose.className = "rose";  
    rose.innerHTML = "🌹";  

    rose.style.left = Math.random() * 100 + "%";  
    rose.style.animationDuration = (Math.random() * 3 + 3) + "s";  

    document.body.appendChild(rose);  

    setTimeout(() => {  
        rose.remove();  
    }, 5000);  

}  

// Heart Rain  
for (let i = 0; i < 60; i++) {  

    const heart = document.createElement("div");  

    heart.className = "heartRain";  
    heart.innerHTML = "❤️";  

    heart.style.left = Math.random() * 100 + "%";  
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";  

    document.body.appendChild(heart);  

    setTimeout(() => {  
        heart.remove();  
    }, 5000);  

}  
// Show final page after 3 seconds  
setTimeout(() => {  

    document.body.innerHTML = `  
    <div class="container">  

        <h1>🥹❤️</h1>  

        <h2>I Love You Too ❤️</h2>  

        <h3>Mustafa ❤️ ${localStorage.getItem("girlName")}</h3>  

        <p>🌹 Our Love Story Begins Today 🌹</p>  

        <h2>Forever ♾️💍</h2>  

    </div>  
    `;  

}, 3000);

};

window.moveButton = function () {

const btn = document.getElementById("noBtn");  

btn.style.position = "absolute";  
btn.style.left = (Math.random() * 80) + "%";  
btn.style.top = (Math.random() * 80) + "%";

};
