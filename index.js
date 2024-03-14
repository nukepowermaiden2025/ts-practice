var squaredArray = function (array) {
    var squared = new Array(array.length);
    var leftIdx = 0;
    var rightIdx = array.length - 1;
    for (var i = 0; i < array.length; i++) {
        var left = array[leftIdx];
        var right = array[rightIdx];
        //if the left is smaller than the right
        //add the left in that index and move to the left
        //other wise add the right one and move the right pointer
        if (Math.abs(left) < Math.abs(right)) {
            squared[i] = left * left;
            leftIdx++;
        }
        else {
            squared[i] = right * right;
            rightIdx--;
        }
    }
    return squared;
};
var test = [-3, 1, 2, 3, 5, 6, 8, 9];
console.log(squaredArray(test));
