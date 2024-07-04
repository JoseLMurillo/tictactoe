// Inicialización del tablero vacío
let board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

// Variable para controlar el turno (true para 'X', false para 'O')
let turnoJugador = true; // true para 'X', false para 'O'

// Mostrar el tablero en la consola
console.log('  1 2 3');
for (let i = 0; i < board.length; i++) {
    console.log(`${i + 1} ${board[i].join('|')}`);
}