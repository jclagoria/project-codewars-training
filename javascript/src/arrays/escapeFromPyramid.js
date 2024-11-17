/**
 * Estás atrapado en Silent Hill, en una habitación cuadrada de tamaño n x n y el
 * temido Pyramid Head (▲) está en algún lugar de la habitación, moviéndose hacia ti (T).
 *
 * Tú no puedes moverte, y Pyramid Head se mueve una celda por turno, en cualquiera
 * de las cuatro direcciones cardinales (arriba, abajo, izquierda, derecha),
 * pero siempre elige el camino más corto hacia tu posición.
 * Tu objetivo es determinar si Pyramid Head puede alcanzarte.
 *
 * La habitación está representada por una matriz n x n:
 *
 * T: tu posición (donde te encuentras atrapado).
 * ▲: la posición inicial de Pyramid Head.
 * .: espacios vacíos donde Pyramid Head puede moverse.
 * #: paredes que Pyramid Head no puede atravesar.
 * Escribe una función que determine si Pyramid Head podrá alcanzarte.
 * Si Pyramid Head puede alcanzarte, devuelve el número de pasos con lo que lo puede lograr,
 * si no puede alcanzarte entonces devuelve -1.
 *
 * const room = [
 *   ['.', '.', '#', '.', '▲'],
 *   ['#', '.', '#', '.', '#'],
 *   ['.', '.', '.', '.', '.'],
 *   ['#', '#', '#', '.', '#'],
 *   ['T', '.', '.', '.', '.'],
 * ]
 *
 * escapePyramidHead(room) // -> 8
 *
 * const room2 = [
 *   ['T', '.', '#', '.'],
 *   ['.', '.', '.', '.'],
 *   ['▲', '.', '.', '#'],
 *   ['.', '#', '#', '#'],
 * ]
 *
 * escapePyramidHead(room2) // -> 2
 *
 * const room3 = [
 *   ['#', '#', '#'],
 *   ['▲', '.', '#'],
 *   ['.', '#', 'T'],
 * ]
 *
 * escapePyramidHead(room3) // -> -1
 */
export function escapeFromPyramidHead(room) {
    const n = room.length;
    const directions = [
        [0, 1],  // derecha
        [1, 0],  // abajo
        [0, -1], // izquierda
        [-1, 0]  // arriba
    ];

    let startX, startY, targetX, targetY;

    // Ubicar las posiciones de Pyramid Head y el jugador
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (room[i][j] === '▲') {
                startX = i;
                startY = j;
            }
            if (room[i][j] === 'T') {
                targetX = i;
                targetY = j;
            }
        }
    }

    // Inicializar BFS
    const queue = [[startX, startY, 0]]; // [x, y, pasos]
    const visited = Array.from({ length: n },
        () => Array(n).fill(false));
    visited[startX][startY] = true;

    // Ejecutar BFS
    while (queue.length > 0) {
        const [x, y, steps] = queue.shift();

        // Si alcanzamos al jugador
        if (x === targetX && y === targetY) return steps;

        // Explorar todas las direcciones posibles
        for (const [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;

            if (
                newX >= 0 && newX < n &&
                newY >= 0 && newY < n &&
                room[newX][newY] !== '#' &&
                !visited[newX][newY]
            ) {
                visited[newX][newY] = true;
                queue.push([newX, newY, steps + 1]);
            }
        }
    }

    return -1;
}