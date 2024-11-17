import {desbloquearCodigo} from "../../src/strings/codigoCifrado.js";

describe('Test desbloquearCodigo', () => {
    it('should return correct code', () => {
        expect(desbloquearCodigo("528934712834", "URDURUDRUDLLLLUUDDUDUDUDLLRRRR")).toBe("")
    });
})