export const wordCount = (word) => {
    const occurence = word?.split('\n').join(' ').split('\t').join(' ').trim().split(' ').filter(word => word != '')
    return occurence.length
}

export const readTime = (data) => {
    let count;
    const initialCount = wordCount(data)
    wordCount(data) > 0 ? count = (initialCount * 0.3) : count = 0

    if (count < 3600) {
        const calc = count / 60
        const finalCount = Math.ceil(calc) + ' minutes'
        return finalCount
    } else if (count >= 3600) {
        const calc = count / 3600
        const finalCount = calc.toFixed(1) + ' hours'
        return finalCount
    }
}
