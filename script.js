function yesClick(){

    push(ref(db, "proposals"), {
        girlName: localStorage.getItem("girlName"),
        answer: "YES ❤️",
        time: new Date().toLocaleString()
    });

    document.body.innerHTML=`
    <div class="container">
    <h1>🥹❤️</h1>
    <h2>Yay!! ❤️</h2>
    <h3>Mustafa ❤️ ${localStorage.getItem("girlName")}</h3>
    <h2>Forever ♾️💍</h2>
    </div>
    `;
}
