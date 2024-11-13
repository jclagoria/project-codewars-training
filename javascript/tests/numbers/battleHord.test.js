import { battleHorde } from "../../src/numbers/battleHord.js";

describe('Test battleHorde', () => {
    test('Should Return the human win the battle - 2h', () => {
        expect(battleHorde('242', '334')).toBe('2h');
    })

    test('Should Return a draw between zombies and humans- x', () => {
        expect(battleHorde('444', '282')).toBe('x');
    })

    test('Should Return the human win the battle - 3h', () => {
        expect(battleHorde( '555', '666')).toBe('3h');
    })

    test('Should Return a draw between zombies and humans- x', () => {
        expect(battleHorde('123', '321')).toBe('x');
    })

    test('Should Return the human win the battle - 3z', () => {
        expect(battleHorde( '4598', '7682')).toBe('3z');
    })
})