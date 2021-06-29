
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

    // console.log(vCount, double, hasBad)
    if (vCount > 2 && double === true && hasBad === false) count++
    if (strings.length < 2) return count
    return niceFinder(strings.slice(1, strings.length))
}

const test = ['ieodmmmkazucvgdmuy']
// console.log(niceFinder(strings))

const wrongAnswer = []

// Part 2
const niceFinder2 = (strings: string[]): number => {
    const doubles = []
    let repeat = false
    let oneApart = false
    for (let i = 0; i < strings[0].length; i++){
        if (doubles.includes(strings[0].slice(i,i+2))){
            if (strings[0].slice(i,i+2) == strings[0].slice(i-1,i+1)){
                if (strings[0].slice(i,i+2) == strings[0].slice(i-2,i)){
                    repeat = true
                }
            } else {
                repeat = true
            }
        } 
        doubles.push(strings[0].slice(i,i+2))

        if (strings[0][i] == strings[0][i+2]) oneApart = true
    }

    if (repeat == true && oneApart == true){
        count++
    } 
    if (strings.length < 2) return count
    return niceFinder2(strings.slice(1, strings.length))
}

console.log(niceFinder2(strings))



// Regular Expression version from online:
"use strict";

const fs = require('fs');
const INPUT = strings;

const correctAnswer = []

// Part 1 was written with pure functions but Part 2 I've decided to write with Regex
const isContainPair = string => /([a-z][a-z]).*\1/.test(string);
const isContainRepeatLetter = string => /([a-z])[a-z]\1/.test(string);

const isNiceString = string => !!(isContainPair(string) && isContainRepeatLetter(string));

const result = INPUT.reduce((total, string) => isNiceString(string) ? ++total : total, 0);

// console.log(result);
