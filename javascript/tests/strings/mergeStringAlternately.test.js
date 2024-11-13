import { mergeAlternately } from "../../src/strings/mergeStringAlternately.js"

describe('test mergeAlternately', () => {
    test('should return merged string: "apbqcr', () => {
        expect(mergeAlternately('abc', 'pqr')).toBe('apbqcr');
    });

    test('should return merged string: "apbqrs"', () => {
        expect(mergeAlternately('ab', 'pqrs')).toBe('apbqrs');
    });

    test('should return merged string: "apbqcd"', () => {
        expect(mergeAlternately('abcd', 'pq')).toBe('apbqcd');
    });
})