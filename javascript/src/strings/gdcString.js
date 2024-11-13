export function gdcOfStrings(str1, str2) {
    // Calculamos el GCD de las longitudes de str1 y str2
    const lenGCD = gcd(str1.length, str2.length);

    // Tomamos el prefijo de str1 de longitud igual a lenGCD
    const candidate = str1.slice(0, lenGCD);

    // Verificamos si el prefijo divide completamente a ambas cadenas
    if (str1.split(candidate).join('') === ''
            && str2.split(candidate).join('') === '') {
        return candidate;
    }

    return ""; // Si no es posible dividir ambas cadenas, retorna ""
}

// Función para calcular el GCD de dos números
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}