export function sentence(arrayOfObjects) {
    const sortedList = arrayOfObjects.sort( (a, b) => {
        const keyA = Number.parseInt(Object.keys(a)[0], 10);
        const keyB = Number.parseInt(Object.keys(b)[0], 10);
        return keyA - keyB;       
    })

    const sentence = sortedList.map(dict => Object.values(dict)[0]).join(' ')

    return sentence;
}

export function sentenceList(arrayOfObjects) {
    return arrayOfObjects
        .sort((a, b) => Number(Object.keys(a)[0]) - Number(Object.keys(b)[0]))
        .map(item => Object.values(item)[0])
        .join(' ');
}

