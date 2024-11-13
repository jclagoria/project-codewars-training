import {isLockNessMonster, isLockNessMonsterTest} from "../../src/strings/aStrangeTripToTheMarket.js";

describe('test aStrangeTripToTheMarket', () => {
    test('isLockNessMonster return True -> Found Nessie', () => {
        expect(isLockNessMonster("Your girlscout cookies are ready to ship. Your total comes to tree fiddy")).toBe(true)
    })

    test('isLockNesMonster return False -> Nessie is not hear', () => {
        expect(isLockNessMonster("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance.")).toBe(false)
    })
})

describe('test isLockNessMonsterTest', () => {
    test('isLockNessMonsterTest return True -> Found Nessie', () => {
        expect(isLockNessMonsterTest("Your girlscout cookies are ready to ship. Your total comes to tree fiddy")).toBe(true)
    })

    test('isLockNessMonsterTest return False -> Nessie is not hear', () => {
        expect(isLockNessMonsterTest("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance.")).toBe(false)
    })
})