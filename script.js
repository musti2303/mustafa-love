function nextPage() {
    let name = document.getElementById("girlName").value.trim();

    if (name === "") {
        alert("Please enter your name ❤️");
        return;
    }

    localStorage.setItem("girlName", name);

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

function yesClick(){
    document.body.innerHTML=`
    <div class="container">
    <h1>🥹❤️</h1>
    <h2>Yay!! ❤️</h2>
    <h3>Mustafa ❤️ ${localStorage.getItem("girlName")}</h3>
    <h2>Forever ♾️💍</h2>
    </div>
    `;
}

function moveButton(){
    let btn=document.getElementById("noBtn");

    btn.style.position="absolute";
    btn.style.left=Math.random()*80+"%";
    btn.style.top=Math.random()*80+"%";
}
