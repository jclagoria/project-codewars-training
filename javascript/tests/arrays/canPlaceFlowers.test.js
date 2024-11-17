import {canPlaceFlowers, canPlaceFlowersBestSolution} from "../../src/arrays/canPlaceFlowers.js";

describe('Test canPLaceFlowers', () => {
    test('Should return a success value True with this entry data flowerbed = [1, 0, 0, 0, 1] and n = 1', () => {
        const flowerbed = [1, 0, 0, 0, 1]
        expect(canPlaceFlowers(flowerbed, 1)).toBe(true)
    })

    test('Should return a success value True with this entry data flowerbed = [1, 0, 0, 0, 1] and n = 2', () => {
        const flowerbed = [1, 0, 0, 0, 1]
        expect(canPlaceFlowers(flowerbed, 2)).toBe(false)
    })

    test('Should return a success value False with this entry data flowered [0,1,0] and n = 1', () => {
        const flowered = [0,1,0]
        expect(canPlaceFlowers(flowered, 1)).toBe(false)
    })
})

describe('Test canPlaceFlowersBestSolution', () => {
    test('Should return a success value True with this entry data flowerbed = [1, 0, 0, 0, 1] and n = 1', () => {
        const flowerbed = [1, 0, 0, 0, 1]
        expect(canPlaceFlowersBestSolution(flowerbed, 1)).toBe(true)
    })

    test('Should return a success value True with this entry data flowerbed = [1, 0, 0, 0, 1] and n = 2', () => {
        const flowerbed = [1, 0, 0, 0, 1]
        expect(canPlaceFlowersBestSolution(flowerbed, 2)).toBe(false)
    })

    test('Should return a success value False with this entry data flowered [0,1,0] and n = 1', () => {
        const flowered = [0,1,0]
        expect(canPlaceFlowersBestSolution(flowered, 1)).toBe(false)
    })
})