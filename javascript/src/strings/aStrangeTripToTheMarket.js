export function isLockNessMonster(stringConversation) {

    const lcConversation = stringConversation.toLowerCase()

    return lcConversation.includes("tree fiddy") ||
        lcConversation.includes("3.50") ||
        lcConversation.includes("three fifty");
}

export function isLockNessMonsterTest(stringConversation) {
    return /tree fiddy|three fifty|3.50/.test(stringConversation)
}
