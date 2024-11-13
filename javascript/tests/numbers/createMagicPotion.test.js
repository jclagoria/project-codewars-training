import { createMagicPotion } from "../../src/strings/createPotions.js";

describe('Test createMagicPotion', () => {

    test('debería encontrar una combinación que sume el poder objetivo', () => {
        expect(createMagicPotion([4, 5, 6, 2], 8)).toEqual([2, 3]);
    });

    test('debería devolver undefined cuando no hay combinación', () => {
        expect(createMagicPotion([1, 2, 3, 4], 9)).toBeUndefined();
    });

    test('debería devolver la primera combinación encontrada cuando hay múltiples soluciones', () => {
        expect(createMagicPotion([1, 2, 3, 4], 5)).toEqual([1, 2]);
    });

    test('debería manejar números negativos y encontrar la combinación', () => {
        expect(createMagicPotion([-1, 3, 7, 2], 6)).toEqual([0, 2]);
    });

    test('debería devolver undefined si no hay combinación posible con números negativos', () => {
        expect(createMagicPotion([-1, 3, 7, 2], 10)).toEqual([1, 2]);
    });

    test('debería encontrar la combinación cuando sólo hay dos elementos que suman el objetivo', () => {
        expect(createMagicPotion([5, 3], 8)).toEqual([0, 1]);
    });

    test('debería devolver undefined para una lista vacía', () => {
        expect(createMagicPotion([], 5)).toBeUndefined();
    });

    test('debería devolver undefined cuando solo hay un elemento en la lista', () => {
        expect(createMagicPotion([4], 4)).toBeUndefined();
    });

    test('debería devolver la primera combinación en caso de múltiples combinaciones válidas', () => {
        expect(createMagicPotion([1, 4, 5, 1, 4], 8)).toEqual([1, 4]);
    });

})