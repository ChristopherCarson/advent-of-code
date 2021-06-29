const CryptoJS = require("crypto-js");

const mine = (key: string): number => {
    let num = 0
    while (CryptoJS.MD5(`${key}${num}`).toString().substring(0,5) !== '00000'){
        num ++
    }
    return num
}
//console.log(mine('iwrupvqb'))

// Part 2

const mine2 = (key: string): number => {
    let num = 0
    while (CryptoJS.MD5(`${key}${num}`).toString().substring(0,6) !== '000000'){
        num ++
    }
    return num
}
console.log(mine2('iwrupvqb'))