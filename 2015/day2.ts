// day 2
const day2 = require('./day2_input.ts')

const presents = day2.input.split(/\r?\n/)

const getPaper = (presents: string[], total: number = 0): void => {
    let smallest, s1, s2, s3, dimensions, l, w, h

    dimensions = presents[0].split('x')

    l = dimensions[0]
    w = dimensions[1]
    h = dimensions[2]

    s1 = l*w
    s2 = w*h
    s3 = h*l

    smallest = Math.min(s1, s2, s3)

    const paper = (2*(s1+s2+s3)) + smallest

    if (presents.length < 2) return total + paper
    return getPaper(presents.slice(1, presents.length), total + paper)
}

console.log(getPaper(presents))