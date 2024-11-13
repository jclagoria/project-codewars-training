import {persistence, persistenceV2, persistenceV3 } from '../../src/numbers/persistentBugger.js'

describe('test persistence' , () => {

    test('returns 3 for input 39', () => {
        expect(persistence(39)).toBe(3);
    });

    test('returns 4 for input 999', () => {
        expect(persistence(999)).toBe(4);
    });

    test('returns 0 for input 4 (already a single digit)', () => {
        expect(persistence(4)).toBe(0);
    });

    test('returns 1 for input 25', () => {
        expect(persistence(25)).toBe(2);
    });

    test('returns 0 for input 7 (single digit)', () => {
        expect(persistence(7)).toBe(0);
    });
})

describe('test persistenceV2' , () => {

    test('returns 3 for input 39', () => {
        expect(persistenceV2(39)).toBe(3);
    });

    test('returns 4 for input 999', () => {
        expect(persistenceV2(999)).toBe(4);
    });

    test('returns 0 for input 4 (already a single digit)', () => {
        expect(persistenceV2(4)).toBe(0);
    });

    test('returns 1 for input 25', () => {
        expect(persistenceV2(25)).toBe(2);
    });

    test('returns 0 for input 7 (single digit)', () => {
        expect(persistenceV2(7)).toBe(0);
    });
})

describe('test persistenceV3' , () => {

    test('returns 3 for input 39', () => {
        expect(persistenceV3(39)).toBe(3);
    });

    test('returns 4 for input 999', () => {
        expect(persistenceV3(999)).toBe(4);
    });

    test('returns 0 for input 4 (already a single digit)', () => {
        expect(persistenceV3(4)).toBe(0);
    });

    test('returns 1 for input 25', () => {
        expect(persistenceV3(25)).toBe(2);
    });

    test('returns 0 for input 7 (single digit)', () => {
        expect(persistenceV3(7)).toBe(0);
    });
})