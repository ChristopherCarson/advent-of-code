// day 1
const day1 = require('./day1_input.ts')

// Part 1
const getFloor = (input: string, floor: number = 0): number => {
    if (input[0] === '(') floor ++
    if (input[0] === ')') floor --
    if (input.length < 2) return floor
    return getFloor(input.substring(1, input.length), floor)
}

// console.log(getFloor(day1.input))

// Part 2
let position = 0
const getFloor2 = (input: string, floor: number = 0): number => {
    position++
    if (input[0] === '(') floor ++
    if (input[0] === ')') floor --
    if (floor === -1) return position
    return getFloor2(input.substring(1, input.length), floor)
}

console.log(getFloor2(day1.input))