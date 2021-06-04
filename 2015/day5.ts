
const day5 = require('./day5_input.ts')

const strings = day5.input.split(/\r?\n/)

let count = 0

// Part 1
const niceFinder = (strings: string[]): number => {
    let vCount = 0
    let double = false
    let hasBad = false
    const vowels = ['a', 'e', 'i', 'o', 'u']
    const bad = ['ab', 'cd', 'pq', 'xy']
    for (let i = 0; i < strings[0].length; i ++){
        if (vowels.includes(strings[0][i])) vCount ++
        if (strings[0][i] === strings[0][i+1]) double = true
        if (bad.includes(strings[0].substring(i, i+2))) hasBad = true
    }

    console.log(vCount, double, hasBad)
    if (vCount > 2 && double === true && hasBad === false) count++
    if (strings.length < 2) return count
    return niceFinder(strings.slice(1, strings.length))
}

const test = ['ugknbfddgicrmopn']
console.log(niceFinder(strings))
