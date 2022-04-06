
const day8 = require('./day8_input.ts')

const str: string[] = day8.input.split(/\r?\n/)

const t = String.raw`""
"abc"
"aaa\"aaa"
"\x27"`


// const str: string[] = t.split(/\r?\n/)

let len = 0;

str.forEach(s => {
    let sLen = s.replace(/^"/, '')
        .replace(/"$/, '')
        .replace(/\\\\/g, ' ')
        .replace(/\\"/g, ' ')
        .replace(/\\x[0-9a-f]{2}/g, ' ').length
    len += sLen
})


console.log('PART1: ', day8.input.length - str.length + 1 - len)
// console.log((JSON.stringify(`"\x29"`).match(/./g) || []).length)

// const test = String.raw`"\x29"`
// // @ts-ignore
// console.log(test.length)

// PART 2

// const len2 = (day8.input.length - str.length + 1) +
//     ((day8.input.match(/"/g) || []).length * 2) + //
//     (day8.input.match(/\\/g) || []).length -
//     (day8.input.match(/\\"/g) || []).length -
//     (day8.input.match(/\r?\n/g) || []).length

let len2 = 0;

str.forEach(s => {
    let sLen = s.replace(/^"/, '   ')
        .replace(/"$/, '   ')
        .replace(/\\\\/g, '  ')
        .replace(/\\"/g, '  ')
        .replace(/\\x[0-9a-f]{2}/g, '     ').length
    len2 += sLen
})

console.log((day8.input.match(/\\/g) || []).length)
console.log((day8.input.match(/"/g) || []).length)
console.log((day8.input.match(/\\"/g) || []).length)

console.log((day8.input.match(/\r?\n/g) || []).length)

console.log('PART2: ', len2 - (day8.input.length - str.length + 1))