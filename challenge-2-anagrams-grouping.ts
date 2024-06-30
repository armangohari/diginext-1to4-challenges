/**
 * DigiNext Challenge 2 - Anagrams Grouping
 * Author: armangohari.com
 * 
 * This function groups an array of strings into anagrams.
 * Anagrams are words or phrases made by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 * 
 * @param {string[]} strings - The array of strings to group into anagrams.
 * @returns {string[][]} - A 2D array where each sub-array contains strings that are anagrams of each other.
 */
function groupAnagrams(strings: string[]): string[][] {
    // Create a map to store arrays of anagrams, keyed by the sorted string
    const anagramMap: { [key: string]: string[] } = {};

    strings.forEach(str => {
        // Sort the string to get the key
        const sortedStr = str.split('').sort().join('');
        
        // If the key does not exist in the map, initialize an array
        if (!anagramMap[sortedStr]) {
            anagramMap[sortedStr] = [];
        }
        
        // Add the original string to the corresponding array
        anagramMap[sortedStr].push(str);
    });

    // Return the values of the hash table as arrays of anagrams
    return Object.values(anagramMap);
}

/**
 * Example usage of the groupAnagrams function.
 */
const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagrams(input);
console.log(result); // Output: [[ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ]]
