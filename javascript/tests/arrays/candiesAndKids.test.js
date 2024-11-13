import {kidsWithCandies, kidsWithCandiesBestSolution} from "../../src/arrays/candiesAndKids.js"

describe('Test kidsWithCandies', () => {
    test('Should return a array with [true,true,true,false,true] ', () => {
        const candies = [2,3,5,1,3]
        expect(kidsWithCandies(candies, 3)).toEqual([true,true,true,false,true])
    })

    test('Should return a array with [true,false,false,false,false]  ', () => {
        const candies = [4,2,1,1,2]
        expect(kidsWithCandies(candies, 1)).toEqual([true,false,false,false,false] )
    })

    test('Should return a array with [true,false,true]', () => {
        const candies = [12,1,12]
        expect(kidsWithCandies(candies, 10)).toEqual([true,false,true] )
    })

})

describe('Test kidsWithCandiesBestSolution', () => {
    test('Should return a array with [true,true,true,false,true] ', () => {
        const candies = [2,3,5,1,3]
        expect(kidsWithCandiesBestSolution(candies, 3)).toEqual([true,true,true,false,true])
    })

    test('Should return a array with [true,false,false,false,false]  ', () => {
        const candies = [4,2,1,1,2]
        expect(kidsWithCandiesBestSolution(candies, 1)).toEqual([true,false,false,false,false] )
    })

    test('Should return a array with [true,false,true]', () => {
        const candies = [12,1,12]
        expect(kidsWithCandiesBestSolution(candies, 10)).toEqual([true,false,true] )
    })

})