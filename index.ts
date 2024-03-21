const squaredArray = (array: number[]) => {

    let squared = new Array(array.length)
    console.log(squared)
    let leftIdx = 0
    let rightIdx = array.length - 1

    for (let i = array.length - 1; i >= 0; i--) {
        const left = array[leftIdx]
        const right = array[rightIdx]
        //if the left is smaller than the right
        //add the left in that index and move to the left
        //other wise add the right one and move the right pointer
        if (Math.abs(left) > Math.abs(right)) {
            squared[i] = left * left //put the leftat the end because we know that these two number are the possible largest on either side becasue it is sorted
            leftIdx++
        } else {
            squared[i] = right * right
            rightIdx--
        }

    }
    return squared;
}
    const test = [-3, 1, 2, 3, 5, 6, 8, 9]
    const result = squaredArray(test)
    console.log(result)
    console.log(JSON.stringify(result) == JSON.stringify([1, 4, 9, 9, 25, 36, 64, 81]))
    console.log('cookies')
