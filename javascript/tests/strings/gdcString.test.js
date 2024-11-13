import {gdcOfStrings} from "../../src/strings/gdcString.js";

describe('Test gdcOfStrings', () => {
    test('Should Return a match string', () => {
        expect(gdcOfStrings('ABCABC', 'ABC')).toBe('ABC')
        expect(gdcOfStrings('ABABAB', 'ABAB')).toBe('AB')
    })

    test('Should Return an empty string', () => {
        expect(gdcOfStrings('ABC', 'XYZ')).toBe('')
        expect(gdcOfStrings('LEET', 'CODE')).toBe('')
    })

})