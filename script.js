let currentPlayer = 'X';
let arr = Array(9).fill(null);
let result = document.getElementById("result");
let reset_btn = document.getElementById("reset-btn");
let refresh_btn = document.getElementById("refresh-btn");
let game_box = document.querySelectorAll(".col");
let start_game_btn = document.getElementById("start-game-btn");
let player = document.getElementById("player");
let box = document.getElementById("box");

let player1 = "Player1";
let player2 = "Player2";

reset_btn.addEventListener('click', (e) => {
    e.preventDefault();
    for (let i = 0; i < 9; i++) {
        arr[i] = null;
        game_box[i].innerText = "";
    }
    result.innerText = "";
})

refresh_btn.addEventListener('click', (e) => {
    e.preventDefault();
    location.reload();
})

start_game_btn.addEventListener('click', (e) => {
    e.preventDefault();
    player1 = document.getElementById("player1").value;
    player2 = document.getElementById("player2").value;
    if (player1 == "") {
        player1 = "Player1";
    }
    if (player2 == "") {
        player2 = "Player2";
    }
    player.innerHTML = `<p class="players-name"><span>${player1} </span><span>v/s</span><span> ${player2}</span></p>`;
    box.style.display = "flex";
})

function handleClick(e) {
    const id = Number(e.id);
    if (arr[id] !== null) return;
    arr[id] = currentPlayer;
    e.innerText = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner() {
    if ((arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
        (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
        (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
        (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
        (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
        (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||
        (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
        (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6])) {
        let winner = currentPlayer === 'X' ? player1 : player2;
        result.innerText = (`Winner is : ${winner}`);
        for (let i = 0; i < 9; i++) {
            if (arr[i] === null) {
                arr[i] = "game over";
            }
        }
        return;
    }
    if (!arr.some((e) => e === null)) {
        result.innerText = (`It's a DRAW !`);
        return;
    }
}
