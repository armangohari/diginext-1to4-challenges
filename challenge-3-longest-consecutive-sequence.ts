/**
 * DigiNext Challenge 3 - Longest Consecutive Sequence
 * Author: armangohari.com
 * 
 * This function finds the length of the longest consecutive sequence in an array.
 * 
 * @param numbers - Array of integers
 * @returns Length of the longest consecutive sequence
 */
function longestConsecutiveSequence(numbers: number[]): number {
    // Create a set to store the unique elements of the array
    const numSet = new Set(numbers);
    let maxLength = 0;

    // Iterate through each number in the set
    for (const num of numSet) {
        // Check if the current number is the start of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentLength = 1;

            // Continue to check for the next consecutive numbers
            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentLength += 1;
            }

            // Update the maximum length if the current sequence is longer
            maxLength = Math.max(maxLength, currentLength);
        }
    }

    return maxLength;
}

/**
 * Example usage of the groupAnagrams function.
 */
const inputArray = [100, 4, 200, 1, 3, 2];
const longestSeqLength = longestConsecutiveSequence(inputArray);
console.log(longestSeqLength); // Output: 4
