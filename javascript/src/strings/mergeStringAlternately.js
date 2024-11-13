export function mergeAlternately(word1, word2) {
    let merge = ''
    const maxLenth = Math.max(word1.length, word2.length)

    for (let i = 0; i < maxLenth; i++) {
        if (word1[i]) merge += word1[i]
        if (word2[i]) merge += word2[i]
    }

    return merge
}