const CryptoJS = require("crypto-js");

const mine = (key: string): number => {
    let num = 0
    while (CryptoJS.MD5(`${key}${num}`).toString().substring(0,5) !== '00000'){
        num ++
    }
    return num
}
console.log(mine('iwrupvqb'))
