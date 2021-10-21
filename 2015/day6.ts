
const day6 = require('./day6_input.ts')


const grid = []
for (let i = 0; i < 1000; i++) {
    const row = []
    for (let ii = 0; ii < 1000; ii++) {
        row.push(0)
    }
    grid.push(row)
}

const strings = day6.input.split(/\r?\n/)

console.log('len', strings.length)
let loops = 0

const activate = (s: string[]): number => {
    s.forEach(l => {
        const line = l.split(' ')
        if (line[0] === 'toggle') {
            loops++
            const start = line[1].split(',')
            const stop = line[3].split(',')
            for (let x: number = parseInt(start[0]); x <= parseInt(stop[0]); x++) {
                for (let y: number = parseInt(start[1]); y <= parseInt(stop[1]); y++) {
                    if (grid[x][y] == 0) {
                        grid[x][y] = 1
                    }
                    else {
                        grid[x][y] = 0
                    }
                }
            }
        }
        if (line[1] === 'off') {
            loops++
            const start = line[2].split(',')
            const stop = line[4].split(',')
            for (let x: number = parseInt(start[0]); x <= parseInt(stop[0]); x++) {
                for (let y: number = parseInt(start[1]); y <= parseInt(stop[1]); y++) {
                    grid[x][y] = 0
                }
            }
        }
        if (line[1] === 'on') {
            loops++
            const start = line[2].split(',')
            const stop = line[4].split(',')
            for (let x: number = parseInt(start[0]); x <= parseInt(stop[0]); x++) {
                for (let y: number = parseInt(start[1]); y <= parseInt(stop[1]); y++) {
                    grid[x][y] = 1
                }
            }
        }
    })

    let count = 0


    for (let x = 0; x < grid.length; x++) {
        for (let y = 0; y < grid[x].length; y++) {
            count += grid[x][y]
        }
    }

    return count
}

//console.log(activate(['turn on 0,0 through 999,999', 'toggle 0,0 through 999,0', 'turn off 499,499 through 500,500', 'toggle 0,0 through 999,0', 'turn on 499,499 through 500,500']))
// console.log(activate(strings))

// console.log('loops', loops)

const activate2 = (s: string[]): number => {
    s.forEach(l => {
        const line = l.split(' ')
        if (line[0] === 'toggle') {
            loops++
            const start = line[1].split(',')
            const stop = line[3].split(',')
            for (let x: number = parseInt(start[0]); x <= parseInt(stop[0]); x++) {
                for (let y: number = parseInt(start[1]); y <= parseInt(stop[1]); y++) {
                    grid[x][y] += 2

                }
            }
        }
        if (line[1] === 'off') {
            loops++
            const start = line[2].split(',')
            const stop = line[4].split(',')
            for (let x: number = parseInt(start[0]); x <= parseInt(stop[0]); x++) {
                for (let y: number = parseInt(start[1]); y <= parseInt(stop[1]); y++) {
                    if (grid[x][y] > 0) grid[x][y] -= 1
                }
            }
        }
        if (line[1] === 'on') {
            loops++
            const start = line[2].split(',')
            const stop = line[4].split(',')
            for (let x: number = parseInt(start[0]); x <= parseInt(stop[0]); x++) {
                for (let y: number = parseInt(start[1]); y <= parseInt(stop[1]); y++) {
                    grid[x][y] += 1
                }
            }
        }
    })

    let count = 0


    for (let x = 0; x < grid.length; x++) {
        for (let y = 0; y < grid[x].length; y++) {
            count += grid[x][y]
        }
    }

    return count
}

//console.log(activate(['turn on 0,0 through 999,999', 'toggle 0,0 through 999,0', 'turn off 499,499 through 500,500', 'toggle 0,0 through 999,0', 'turn on 499,499 through 500,500']))
console.log(activate2(strings))