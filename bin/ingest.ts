/**
 * PROMPT
 * Create a function that can read a file like this:
 *  1 oxygen
    2 fire
    7 force
    5 select
    4 paragraph

    The function should put the rows in ascending order in the shape of a pyramid
    And then return the last element in the row. The number of rows is the number increasing from 1 - n

 */


import fs from 'node:fs/promises'
import { parse } from 'node:path'
import { exit } from 'node:process'

const readFileAsync = async () => {
    const data = await fs.readFile('./bin/input.txt', { encoding: 'utf8' })
    const dataArray = data.split("\n").map((item: string) => {
        const  row = item.split(" ")
        const parsedNum = parseInt(row[0])
        return  [parsedNum, row[1]]
    })
  
    const sorted = dataArray.sort((a, b) => {
        const numA = a[0] as number
        const numB = b[0] as number
        return numA - numB
    })


    let skip = 0
    let target = 0
    let result: string[] = []

    for (let i = 0; i < sorted.length; i++){
        const currentIdx = sorted[i][0] as number  - 1
        if (currentIdx === target) {
            result.push(sorted[target][1] as string)
            skip++
            target = target + skip + 1
        }
    }
    
    const answer = result.join(" ")

    console.log(answer)
    return result.join(" ")
}

const process = async () => {
    await readFileAsync()
}


process().then(() => { exit() })