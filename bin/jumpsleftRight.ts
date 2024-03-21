/**
 * Given an array find the largest number and then wrap around the array to the right and determine how many jumps
 * it takes to get back to the original numer
 * The largest number will always one instance
 * The array is always non empty positive number
 */

const smallestJumps = (arr: number[]) => {
    let jumps = 0 //track number of jumps
    let isMoveRight = true //track if movement is left or right
    let hasFoundValue = false
    let result = -1
    let nextIdx = -1
    let nextValue = -1
    const largest = findLargest(arr)
    let currentIdx = arr.indexOf(largest)//track the current idx
    let currentValue = largest //track the current value

    while (jumps > -1 && hasFoundValue === false) {
        jumps++
        if (isMoveRight) {
            nextIdx = (currentIdx + Math.abs(currentValue))
            if (nextIdx > arr.length) {
                nextIdx= nextIdx % arr.length
            }//get the next idx

            nextValue = arr[nextIdx]//get the next value
            console.log('Moving right')
            console.log(nextValue)
            isMoveRight = false //next time move left
        } else if (!isMoveRight) {
            console.log('is not move right')
            nextIdx = currentIdx - currentValue
            if (nextIdx < 0) {
                nextIdx = nextIdx + arr.length
            }
            nextValue = arr[nextValue]
            console.log('Moving left')
            console.log(nextValue)
        }
        currentIdx = nextIdx
        currentValue = nextValue

        if (currentValue === largest) {
            hasFoundValue = true
        }
    }
    console.log(largest)
    console.log(`This is the jumps: ${jumps}`)
    return jumps
}

const findLargest = (arr: number[]) => {
    let largest = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (largest < arr[i]) {
            largest = arr[i]
        }
    }
    return largest
}

const result = smallestJumps([1, 7, 1, 1, 1, 1])
console.log(result)


export { };

//Expect answer of 2