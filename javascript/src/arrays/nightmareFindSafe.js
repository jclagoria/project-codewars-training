export function findSafestPath(dream) {
    const rows = dream.length
    const columns = dream[0].length

    const dangerLevel = Array.from({length: rows},
        () => Array(columns).fill(Number.POSITIVE_INFINITY))
    dangerLevel[0][0] = dream[0][0]

    // Trabajamos con la primera fila - avanza a la derecha
    for (let j = 1; j < columns; j++) {
        dangerLevel[0][j] = dangerLevel[0][j - 1] + dream[0][j]
    }

    for (let i = 1; i < rows; i++) {
        dangerLevel[i][0] = dangerLevel[i - 1][0] + dream[i][0]
    }

    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < columns; j++) {
            dangerLevel[i][j] = Math.min(dangerLevel[i - 1][j], dangerLevel[i][j - 1]) + dream[i][j]
        }
    }

    return dangerLevel[rows - 1][columns -1]
}