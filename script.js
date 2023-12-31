let scores = [0,0];

async function game() {
    let randNum1 = Math.floor(Math.random()*6)
    let randNum2 = Math.floor(Math.random()*6)

    img_src = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];

    let img1 = document.querySelector(".img1");
    let img2 = document.querySelector(".img2");

    for (let i = 0; i < 13; i++) {
        img1.src = img_src[i%6];
        img2.src = img_src[(i+3)%6];
        await sleep(60);
    }
    img1.setAttribute("src", img_src[randNum1]);
    img2.src = img_src[randNum2];

    let header = document.querySelector(".header");

    if (randNum1 > randNum2) {
        header.innerHTML = "🏆 Player 1 Wins!";
        scores[0]++;
        let sc1 = document.querySelector(".sc1");
        sc1.innerHTML = `Player 1's Score: ${scores[0]}`
    } else if (randNum1 < randNum2) {
        header.innerHTML = "Player 2 Wins! 🏆";
        scores[1]++;
        let sc2 = document.querySelector(".sc2");
        sc2.innerHTML = `Player 2's Score: ${scores[1]}`
    } else {
        header.innerHTML = "🏆 Draw! 🏆";
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}