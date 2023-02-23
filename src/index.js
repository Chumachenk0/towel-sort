
// You should implement your task here.

module.exports = function towelSort (matrix) {

    if (matrix == null || matrix.length === 0) {
        return [];
    }

    // Initialize the flattened array
    const flattenedArray = [];

    // Loop through each row in the matrix
    for (let i = 0; i < matrix.length; i++) {
        // If the row index is even, append the row to the flattened array
        if (i % 2 === 0) {
            for (let j = 0; j < matrix[i].length; j++) {
                flattenedArray.push(matrix[i][j]);
            }
            // If the row index is odd, append the row in reverse order to the flattened array
        } else {
            for (let j = matrix[i].length - 1; j >= 0; j--) {
                flattenedArray.push(matrix[i][j]);
            }
        }
    }

    return flattenedArray;
  }