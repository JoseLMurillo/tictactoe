# Reto de tic tac toe con JavaScript usando variables, condicionales y ciclos.

Desarrolla un juego de tic-tac-toe para ser jugado **exclusivamente** en la consola del navegador. El juego permite a dos jugadores **alternar turnos** para marcar sus movimientos en un tablero de 3x3. El primer jugador usará 'X' y el segundo 'O'. El segundo jugador será una máquina que realiza sus movimientos de manera **aleatoria**. El juego finaliza cuando uno de los jugadores logra alinear tres de sus símbolos en línea horizontal, vertical o diagonalmente, o cuando se llenan todas las casillas sin alineación ganadora, resultando en un empate.

## Ejemplo del Flujo del Juego
1. **Inicio del Juego:**
	- Se muestra un mensaje de bienvenida con instrucciones para los jugadores.

	- El juego comienza con un tablero vacío como este, los números representan únicamente la posición:

```
     1 | 2 | 3
     4 | 5 | 6
     7 | 8 | 9
```

2. **Turnos de los Jugadores:**
   - Los jugadores alternan turnos para colocar sus símbolos en el tablero. Se decide de forma aleatoria que jugador iniciara.

   - Ejemplo de turno de 'X': El jugador 'X' decide colocar su símbolo en la posición 5 del tablero:

     ```
     1 | 2 | 3
     4 | X | 6
     7 | 8 | 9
     ```

3. **Movimiento de la Máquina ('O'):**
   - Si el jugador 'O' es controlado por la máquina, realiza un movimiento aleatorio válido.

   - Ejemplo de turno de 'O': La máquina decide colocar su símbolo en la posición 1 del tablero:

     ```
     O | 2 | 3
     4 | X | 6
     7 | 8 | 9
     ```

4. **Determinación del Ganador o Empate:**
   - El juego verifica después de cada movimiento si uno de los jugadores ha alineado tres símbolos en línea.

   - Ejemplo de victoria de 'X': El jugador 'X' alinea tres 'X' en diagonal:

     ```
     X | 2 | O
     4 | X | 6
     O | 8 | X
     ```
    
	- Se muestra un mensaje indicando que el jugador 'X' ha ganado.

   - Si todas las casillas están ocupadas y no hay ganador, se declara un empate:

     ```
     X | O | X
     X | O | O
     O | X | X
     ```
     
	- Se muestra un mensaje indicando que el juego ha terminado en empate.

## Requisitos Funcionales
- [ ] Mostrar un tablero de 3x3 inicialmente vacío al comenzar el juego.
- [ ] Se decide de forma aleatoria que jugador iniciara.
- [ ] Alternar entre turnos de dos jugadores ('X' y 'O', donde uno de los jugadores es controlado por la máquina).
- [ ] Permitir a los jugadores ingresar la posición donde desean colocar su símbolo ('X' o 'O') en el tablero.
- [ ] Verificar y validar que la posición ingresada por el jugador esté dentro del rango válido (1 a 9) y no esté ocupada por otro símbolo previamente.
- [ ] Si el jugador es la máquina, generar un movimiento aleatorio válido.
- [ ] Validar y declarar al jugador ganador si logra alinear tres de sus símbolos en línea horizontal, vertical o diagonal.
- [ ] Detectar y declarar empate cuando todas las casillas estén ocupadas y no haya un ganador.

## Restricciones Técnicas
- Utilizar solamente variables para almacenar el estado del tablero y los turnos de los jugadores. 
- Implementar condicionales para validar movimientos y determinar el estado del juego.
- Emplear ciclos para alternar turnos y actualizar el estado del tablero.

## Consideraciones Adicionales
- Recuerda que la estructura básica de un proyecto es un archivo html conectado con un archivo js y ejecutado desde el plugin live server.

**index.html**
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS Game</title>
</head>
<body>

    <script src="app.js"></script>
</body>
</html>
```

- Asegurarse de que el juego sea intuitivo para los jugadores, con mensajes claros de instrucciones y estado del juego.
- Realizar pequeños incrementos a tu código y probarlos antes de avanzar al siguiente.
- Probar el juego para asegurarse de que todas las funcionalidades y validaciones están correctamente implementadas.
