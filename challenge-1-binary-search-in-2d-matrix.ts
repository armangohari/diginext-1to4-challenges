/**
 * DigiNext Challenge 1 - Binary Search in 2D Matrix
 * Author: armangohari.com
 * 
 * This function implements a binary search algorithm to find a target number in a given 2D matrix.
 * The matrix is assumed to have its rows sorted in ascending order and each row is sorted from left to right.
 * 
 * @param {number[][]} matrix - The 2D matrix in which to search for the target number.
 * @param {number} target - The number to search for in the matrix.
 * @returns {boolean} - Returns true if the target number is found, otherwise returns false.
 */
function binarySearch(matrix: number[][], target: number): boolean {
    // Check if the matrix is empty or its first row is empty
    if (matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }

    // Flatten the 2D matrix into a 1D array
    const flattenedMatrix: number[] = [];
    for (let i = 0; i < matrix.length; i++) {
        flattenedMatrix.push(...matrix[i]);
    }

    // Initialize the binary search pointers
    let left = 0;
    let right = flattenedMatrix.length - 1;

    // Perform binary search on the flattened array
    while (left <= right) {
        // Calculate the middle index
        let mid = Math.floor((left + right) / 2);
        let midValue = flattenedMatrix[mid];

        // Check if the middle value is the target
        if (midValue === target) {
            return true;
        }
        // If the middle value is less than the target, search the right half
        else if (midValue < target) {
            left = mid + 1;
        }
        // If the middle value is greater than the target, search the left half
        else {
            right = mid - 1;
        }
    }

    // Return false if the target number was not found in the matrix
    return false;
}

/**
 * Example usage of the binarySearch function.
 */
const matrix: number[][] = [
    [1, 5, 10],
    [11, 21, 51],
    [65, 75, 100],
];

// Test cases
console.log("1 in the matrix? " + binarySearch(matrix, 1));    // Output: true
console.log("50 in the matrix? " + binarySearch(matrix, 50));  // Output: false
console.log("75 in the matrix? " + binarySearch(matrix, 75));  // Output: true
