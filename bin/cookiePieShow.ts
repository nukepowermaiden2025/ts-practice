
interface Cookie {
    name: string
    batchCount: number
    flavor: string
}
 
interface Pie {
    name: string
    tinCount: number
    flavor: string
}

type Desert = Cookie | Pie | string

const now = Date.now()
const today = new Date(now).toUTCString()
const day = new Date(now).getDay()
const todayFromEpoch = Date.parse(today)

console.log(`This is now ${now}`)
console.log(`This is today ${today}`)
console.log(`This is day ${day}`)
console.log(`This is todayFromEpoch ${todayFromEpoch}`)

const millisecondInDay = 24 * 60 * 60 * 1000
console.log(millisecondInDay)

const showDesert = (desert: Desert) => {
    if (true) {
        console.log(`Where is my desert! I want ${desert} now as in today: ${day}!`)
    }
}

const myprize = () => {
    console.log('My prize')
    for (let i = 0; i < 10; i++){
        console.log(`My prize is typing faster right now ${now}`)
    }
    for (let i = 0; i < 10; i++){
        console.log(`There is not such thing as today ${day}`)
    }

    const myObject = {
        flavor: 'Pistachio',
        desert: 'Flan Cupcakes',
        number: 10
    }

    for (const key in myObject) {
        console.log(key)
    }
}

const desert = 'Funnel Cake'
const show = showDesert(desert)
console.log(show)
myprize()

