// day 3
const day3 = require('./day3_input.ts')

const set = new Set<string>() //coords are [x, y]

// Recursive - RangeError: Maximum call stack size exceeded
const countUniqueHomes = (directions: string, coord: [number, number] = [0,0], list: typeof set = set): number => {
    const move = directions[0]
    if (move === '<'){
        coord[0] -= 1
    } else if (move == '^'){
        coord[1] -= 1
    } else if (move === '>'){
        coord[0] += 1
    } else if (move === 'v'){
        coord[0] += 1
    }
    list.add(coord.toString())
    if (directions.length < 2){
        return list.size
    }
    return countUniqueHomes(directions.substring(1, directions.length), coord, list)
}


// Non recursive
const countUniqueHomesNR = (directions: string, coord: [number, number] = [0,0]): number => {
    set.add(coord.toString())

    for (let i = 0; i < directions.length; i++){
        const move = directions[i]
        if (move === '<'){
            coord[0] -= 1
        } else if (move == '^'){
            coord[1] -= 1
        } else if (move === '>'){
            coord[0] += 1
        } else if (move === 'v'){
            coord[1] += 1
        }
        set.add(coord.toString())
    }
    return set.size
}

console.log(countUniqueHomesNR(day3.input))
// Answer 2572

