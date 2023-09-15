// let draggedPlayer = null;

// function allowDrop(ev) {
//     ev.preventDefault();
// }

// function drag(ev) {
//     draggedPlayer = ev.target;
// }

// function drop(ev) {
//     ev.preventDefault();
//     if (draggedPlayer) {
//         ev.target.appendChild(draggedPlayer);
//         draggedPlayer.style.left = ev.clientX - ev.target.getBoundingClientRect().left + "px";
//         draggedPlayer.style.top = ev.clientY - ev.target.getBoundingClientRect().top + "px";
//         draggedPlayer = null;
//     }
// }


// Seu arquivo main.js

const players = document.querySelectorAll('.player');
const field = document.getElementById('field');

let isDragging = false;
let dragOffsetX = 0;
let dragOffsetY = 0;
let currentPlayer = null;

players.forEach(player => {
  player.addEventListener('mousedown', (e) => {
    isDragging = true;
    currentPlayer = player;
    dragOffsetX = e.clientX - player.getBoundingClientRect().left;
    dragOffsetY = e.clientY - player.getBoundingClientRect().top;
    player.style.cursor = 'grabbing';
    e.preventDefault();
  });
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  const x = e.clientX - dragOffsetX;
  const y = e.clientY - dragOffsetY;

  currentPlayer.style.left = `${x}px`;
  currentPlayer.style.top = `${y}px`;
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  if (currentPlayer) {
    currentPlayer.style.cursor = 'grab';
    currentPlayer = null;
  }
});
