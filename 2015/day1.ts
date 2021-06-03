// day 1
const day1 = require('./day1_input.ts')

const getFloor = (input: string, floor: number = 0): number => {
    if (input[0] === '(') floor ++
    if (input[0] === ')') floor --
    if (input.length < 2) return floor
    return getFloor(input.substring(1, input.length), floor)
}

console.log(getFloor(day1.input))
