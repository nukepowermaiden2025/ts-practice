import fs from 'node:fs/promises'
import { exit } from 'node:process'

const readFileAsync = async () => {
    const data = await fs.readFile('./input.txt', { encoding: 'utf8' })
    console.log(data)
}

const process = async () => {
    await readFileAsync()
}


process().then(() => { exit(1) })