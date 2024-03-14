const squaredArray = (array: number[]) => {
    let squared = new Array(array.length)
    console.log(squared)
    let leftIdx = 0
    let rightIdx = array.length - 1

    for(let i = 0; i < array.length; i++){
    const left = array[leftIdx]
    const right = array[rightIdx]
//if the left is smaller than the right
  //add the left in that index and move to the left
  //other wise add the right one and move the right pointer
    if(Math.abs(right) > Math.abs(left)){
      
      squared[array.length - i] = right * right
      rightIdx--
      console.log(squared)
    }else{
        squared[array.length - i] = left * left
        leftIdx++
        console.log(squared)
    }
    
  }
  return squared;
}
const test = [-3,1, 2, 3, 5, 6, 8, 9]
const result = squaredArray(test)
// console.log(result)
// console.log(JSON.stringify(result) == JSON.stringify([1, 4, 9, 9, 25, 36, 64, 81]))
