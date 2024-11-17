import { reverseWords } from "../../src/strings/reverseWordsString.js";

describe('Test reverseWordsString', () => {
    it('should reverse word ', () => {
        expect(reverseWords("the sky is blue")).toBe("blue is sky the")
        expect(reverseWords("  hello world  ")).toBe("world hello")
        expect(reverseWords("a good   example")).toBe("example good a")
    })
})