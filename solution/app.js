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

let contador = 0;

// Ciclo principal del juego
while (true && contador < 10) {
    //Determinar el símbolo del jugador actual
    let simboloJugador = turnoJugador ? 'X' : 'O';

    if (turnoJugador) {
        console.log(`\nTurno del jugador ${simboloJugador}`);
        let fila, columna;

        do {
            fila = parseInt(prompt('Ingrese el número de fila (1-3):')) - 1;
            columna = parseInt(prompt('Ingrese el número de columna (1-3):')) - 1;

            if(board[fila][columna] !== ' '){
              alert("Campo ocupado, ingrese uno correcto");
            }

        } while(!((fila >= 0 && fila < 3) && (columna >= 0 && columna < 3) && board[fila][columna] === ' '));

        board[fila][columna] = simboloJugador;

        // Actualizar el tablero con el movimiento del jugador
    }else{
        console.log(`\nTurno del jugador ${simboloJugador}`);
        let fila, columna;

        do {
            fila = Math.floor(Math.random() * 3);
            columna = Math.floor(Math.random() * 3);
        }
        while(!(board[fila][columna] === ' '));

        board[fila][columna] = simboloJugador;
    }

    // Mostrar el tablero después de cada movimiento
    console.log('  1 2 3');
    for (let i = 0; i < board.length; i++) {
        console.log(`${i + 1} ${board[i].join('|')}`);
    }

    // Verificar si hay un ganador
    let winner = false;

    // Verificar filas y columnas
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === simboloJugador && board[i][1] === simboloJugador && board[i][2] === simboloJugador) {
            winner = true;
        }
        if (board[0][i] === simboloJugador && board[1][i] === simboloJugador && board[2][i] === simboloJugador) {
            winner = true;
        }
    }

    // Verificar diagonales
    if (board[0][0] === simboloJugador && board[1][1] === simboloJugador && board[2][2] === simboloJugador) {
        winner = true;
    }
    if (board[0][2] === simboloJugador && board[1][1] === simboloJugador && board[2][0] === simboloJugador) {
        winner = true;
    }

    // Verificar empate
    let draw = true;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === ' ') {
                draw = false;
            }
        }
    }

    if (draw) {
        console.log('\n¡Empate!');
        break; // Terminar el juego si hay un empate
    }

    if (winner) {
        console.log(`\n¡El jugador ${simboloJugador} ha ganado!`);
        break; // Terminar el juego si hay un ganador
    }

    // Alternar el turno al siguiente jugador
    turnoJugador = !turnoJugador;
    
    contador++;
}
