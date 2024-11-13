import {findTheKiller, findTheKillerWithPattern} from "../../src/strings/findAKiller.js"

describe('Test Find A killer', () => {
    test('Should return the name of the Killer --> Dracula', () => {
        const whisper = 'd~~~~~a'
        const suspects = ['Dracula', 'Freddy Krueger', 'Jason Voorhees', 'Michael Myers']

        expect(findTheKiller(whisper, suspects)).toBe('Dracula')
    })

    test('Should return the names of the Killers --> ', () => {
        const whisper = '~r~dd~';
        const suspects = ['Freddy', 'Freddier', 'Fredderic']

        expect(findTheKiller(whisper, suspects)).toBe('Freddy,Freddier,Fredderic')
    })

    test('Should return a empty string', () => {
        const whisper = '~r~dd$';
        const suspects = ['Freddy', 'Freddier', 'Fredderic']

        expect(findTheKiller(whisper, suspects)).toBe('')
    })
})

describe('Test find a Killer with Regex', () => {
    test('Should return the name of the Killer --> Dracula', () => {
        const whisper = 'd~~~~~a'
        const suspects = ['Dracula', 'Freddy Krueger', 'Jason Voorhees', 'Michael Myers']

        expect(findTheKillerWithPattern(whisper, suspects)).toBe('Dracula')
    })

    test('Should return the names of the Killers --> ', () => {
        const whisper = '~r~dd~';
        const suspects = ['Freddy', 'Freddier', 'Fredderic']

        expect(findTheKillerWithPattern(whisper, suspects)).toBe('Freddy,Freddier,Fredderic')
    })

    test('Should return a empty string', () => {
        const whisper = '~r~dd$';
        const suspects = ['Freddy', 'Freddier', 'Fredderic']

        expect(findTheKillerWithPattern(whisper, suspects)).toBe('')
    })
})