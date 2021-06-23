declare const io: any;
const socket = io("http://localhost:3000");

// store the board data in a matrix
let board: any = []

// fill the board matrix
const initBoard = () => {
  for (let j = 0; j < 6; j++) {
    let row = []
    for (let i = 0; i < 7; i++) {
      row.push(0);
    }
    board.push(row);
  }
}

// render board
const renderBoard = () => {
  let html = '';
  let tileContainer = document.getElementById('tileContainer');
  tileContainer.innerHTML = '';

  for (let j = 0; j < board.length; j++) {
    let row  = document.createElement("div");
    row.classList.add('row');
    row.classList.add('flex-nowrap');
    row.style.marginTop = "5px";

    for (let i = 0; i < board[j].length; i++) {
      row.innerHTML += `<div class="col">
        <div style="width: 100px; height: 100px; background-color: #e6e8e6;" class="rounded-circle"></div>
      </div>`;
    }
    tileContainer.appendChild(row);
  }
}

initBoard();
renderBoard();
