import {escapeFromPyramidHead} from "../../src/arrays/escapeFromPyramid.js";

describe('Test Nightmare Find Safe', () => {
    test('Should return successfully value 8', () => {
        const room = [
            ['.', '.', '#', '.', '▲'],
            ['#', '.', '#', '.', '#'],
            ['.', '.', '.', '.', '.'],
            ['#', '#', '#', '.', '#'],
            ['T', '.', '.', '.', '.'],
        ]

        expect(escapeFromPyramidHead(room)).toBe(8)
    })

    test('Should return successfully value 2', () => {
        const room = [
            ['T', '.', '#', '.'],
            ['.', '.', '.', '.'],
            ['▲', '.', '.', '#'],
            ['.', '#', '#', '#'],
        ]

        expect(escapeFromPyramidHead(room)).toBe(2)
    })

    test('Should return successfully value -1', () => {
        const room = [
            ['#', '#', '#'],
            ['▲', '.', '#'],
            ['.', '#', 'T'],
        ]
        expect(escapeFromPyramidHead(room)).toBe(-1)
    })

})