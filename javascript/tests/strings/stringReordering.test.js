import { sentence, sentenceList } from "../../src/strings/stringReordering"
describe('test sentence', () => {
    test('should return a valid sentence: Vatsan took his dog for a spin', () => {
        const input = [
            {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
            {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
        ];

        expect(sentence(input)).toBe('Vatsan took his dog for a spin')
    })

    test('should return a valid sentence: Forget it Jake. It is Chinatown', () => {
        const input = [
            {'3': 'Jake.'}, {'5': 'Chinatown'}, {'1': 'Forget'},{'4': 'It is'}, {'2': 'it'}
        ];

        expect(sentence(input)).toBe('Forget it Jake. It is Chinatown')
    })

    test('should return a valid sentence: Forget it Jake. It is Chinatown', () => {
        const input = [
            {'3': 'Jake.'}, {'5': 'Chinatown'}, {'1': 'Forget'},{'4': 'It is'}, {'2': 'it'}
        ];

        expect(sentence(input)).toBe('Forget it Jake. It is Chinatown')
    })

    test('I love vatsan!', () => {
        const input = [
            {'3': 'vatsan!'}, {'2': 'love'}, {'1': 'I'} 
        ];

        expect(sentence(input)).toBe('I love vatsan!')
    })

    test('Code Wars', () => {
        const input = [
            {'0': 'Wars'}, {'-1': 'Code'} 
        ];

        expect(sentence(input)).toBe('Code Wars')
    })

     // Test Case 4: Single object in array
     test('should return a single word if only one object is in the array', () => {
        const input = [{'1': 'Hello'}];
        expect(sentence(input)).toBe('Hello');
    });

    // Test Case 5: Empty array
    test('should return an empty string if input array is empty', () => {
        const input = [];
        expect(sentence(input)).toBe('');
    });

    // Test Case 6: Non-sequential keys
    test('should handle non-sequential keys correctly', () => {
        const input = [
            {'10': 'end'}, {'1': 'This'}, {'5': 'the'}, {'8': 'sentence'}, {'3': 'is'}
        ];
        expect(sentence(input)).toBe('This is the sentence end');
    });
    
})

describe('test sentenceList', () => {
    test('should return a valid sentence: Vatsan took his dog for a spin', () => {
        const input = [
            {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
            {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
        ];

        expect(sentenceList(input)).toBe('Vatsan took his dog for a spin')
    })

    test('should return a valid sentence: Forget it Jake. It is Chinatown', () => {
        const input = [
            {'3': 'Jake.'}, {'5': 'Chinatown'}, {'1': 'Forget'},{'4': 'It is'}, {'2': 'it'}
        ];

        expect(sentenceList(input)).toBe('Forget it Jake. It is Chinatown')
    })

    test('should return a valid sentence: Forget it Jake. It is Chinatown', () => {
        const input = [
            {'3': 'Jake.'}, {'5': 'Chinatown'}, {'1': 'Forget'},{'4': 'It is'}, {'2': 'it'}
        ];

        expect(sentenceList(input)).toBe('Forget it Jake. It is Chinatown')
    })

    test('should return an a valid sentence: I love vatsan!', () => {
        const input = [
            {'3': 'vatsan!'}, {'2': 'love'}, {'1': 'I'} 
        ];

        expect(sentenceList(input)).toBe('I love vatsan!')
    })

    test('should return an a valid sentence: Code Wars', () => {
        const input = [
            {'0': 'Wars'}, {'-1': 'Code'} 
        ];

        expect(sentenceList(input)).toBe('Code Wars')
    })

     // Test Case 4: Single object in array
     test('should return a single word if only one object is in the array', () => {
        const input = [{'1': 'Hello'}];
        expect(sentenceList(input)).toBe('Hello');
    });

    // Test Case 5: Empty array
    test('should return an empty string if input array is empty', () => {
        const input = [];
        expect(sentenceList(input)).toBe('');
    });

    // Test Case 6: Non-sequential keys
    test('should handle non-sequential keys correctly', () => {
        const input = [
            {'10': 'end'}, {'1': 'This'}, {'5': 'the'}, {'8': 'sentence'}, {'3': 'is'}
        ];
        expect(sentenceList(input)).toBe('This is the sentence end');
    });
    
})