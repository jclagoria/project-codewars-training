export function desbloquearCodigo(inicial, movimientos) {
    // Convertimos el número inicial en un array de dígitos
    let codigo = inicial.split('').map(Number);
    let posicion = 0;  // Empezamos en el primer dígito (posición 0)

    // Iteramos sobre cada movimiento
    for (let movimiento of movimientos) {
        if (movimiento === 'R') {
            // Mover a la derecha, con bucle al inicio si estamos en el último
            posicion = (posicion + 1) % codigo.length;
        } else if (movimiento === 'L') {
            // Mover a la izquierda, con bucle al final si estamos en el primero
            posicion = (posicion - 1 + codigo.length) % codigo.length;
        } else if (movimiento === 'U') {
            // Incrementar el dígito actual (con bucle de 9 a 0)
            codigo[posicion] = (codigo[posicion] + 1) % 10;
        } else if (movimiento === 'D') {
            // Decrementar el dígito actual (con bucle de 0 a 9)
            codigo[posicion] = (codigo[posicion] - 1 + 10) % 10;
        }
    }

    // Convertimos el array de dígitos a una cadena final
    return codigo.join('');
}