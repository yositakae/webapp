function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function randomNumber() {
    return Math.floor(Math.random() * 10);
}
async function luckyGame() {
    for (let i = 1; i <= 3; i++) {
        await wait(2000);
        let num = randomNumber();
        console.log(`Num ${i} : ${num}`);
        if (num % 2 !== 0) {
            console.log("You lost");
            return;
        }
    }
    console.log("You win");
}
luckyGame();