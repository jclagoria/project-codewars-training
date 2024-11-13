export function distinct(arr) {

    const seenElement = new Set()
    const result = []

    for (const resultElement of arr) {
        if(!seenElement.has(resultElement)) {
            seenElement.add(resultElement)
            result.push(resultElement)
        }
    }

    return result;
}

export function distinctArrFilter(arr) {
    return arr.filter((num, index) => arr.indexOf(num) === index);
}