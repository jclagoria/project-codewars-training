import { distinct, distinctArrFilter } from "../../src/arrays/removeDuplicatesFromList.js"


describe('test distinct', () => {
    test('test with 1 element in the array', () => {
        expect(distinct([1])).toEqual([1]);
    });

    test('test with 2 element in the array', () => {
        expect(distinct([1,2])).toEqual([1,2]);
    });

    test('test with 3 element in the array', () => {
        expect(distinct([1,1,2])).toEqual([1,2]);
    });
})

describe('test distinctArrFilter', () => {
    test('test with 1 element in the array', () => {
        expect(distinctArrFilter([1])).toEqual([1]);
    });

    test('test with 2 element in the array', () => {
        expect(distinctArrFilter([1,2])).toEqual([1,2]);
    });

    test('test with 3 element in the array', () => {
        expect(distinctArrFilter([1,1,2])).toEqual([1,2]);
    });
})