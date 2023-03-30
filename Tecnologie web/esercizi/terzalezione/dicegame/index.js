let x = setInterval( () => {
    // Genero due valori casuali e li assegno alle due immagini

    let randomValue = Math.floor(Math.random() * 6) + 1;
    let imagePath_player1 = "images/dice" + randomValue + ".png";
    randomValue = Math.floor(Math.random() * 6) + 1;
    let imagePath_player2 = "images/dice" + randomValue + ".png";

    // Selezioniamo usando querySelector le due immagini e gli assegno i valori

    document.querySelector(".img1").setAttribute("src", imagePath_player1);
    document.querySelector(".img2").setAttribute("src", imagePath_player2);

    // Selezioniamo il titolo h1 e gli assegnamo il valore del vincitore

    if (imagePath_player1 > imagePath_player2) {
        document.querySelector("h1").innerHTML = "Player 1 wins!";
    } else if (imagePath_player1 < imagePath_player2) {
        document.querySelector("h1").innerHTML = "Player 2 wins!";
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}, 1000);

setTimeout(() => {
    clearInterval(x);
},10000)