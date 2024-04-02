"use strict";
/**
 * Transpose a matrix such that the columns are flipped into rows
 * Example
 *  const input = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  const expected = [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
  ];
*/
const transposeMatrix = (matrix) => {
    const newMatrix = [];
    for (let r = 0; r < matrix.length; r++) {
        const newRow = [];
        for (let c = 0; c < matrix.length; c++) {
            console.log(matrix[r][c]); // Means first row and every columns
            console.log(matrix[c][r]); //This mean first column every row
            //0,0
            //0,1
            //0,2
            newRow.push(matrix[c][r]);
        }
        newMatrix.push(newRow);
    }
    return [];
};
const input = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
transposeMatrix(input);
