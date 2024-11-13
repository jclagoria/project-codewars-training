import {findSafestPath} from "../../src/arrays/nightmareFindSafe.js";

describe('findSafestPath', () => {
    test('Should find thw path more secure in the labyrinth', () => {
        const dream = [
            [1, 3, 1],
            [1, 5, 1],
            [4, 2, 1],
        ]

        expect(findSafestPath(dream)).toBe(7)
    })
})