/**
 * DigiNext Challenge 4 - Intervals Merger
 * Author: armangohari.com
 * 
 * This function merges a collection of intervals by combining overlapping intervals.
 * 
 * @param intervals - An array of intervals represented as tuples of numbers.
 * @returns A new array of merged intervals.
 */

// Interval type with a start and end
type Interval = [number, number];

function mergeIntervals(intervals: Interval[]): Interval[] {
    if (intervals.length === 0) return [];

    // Sort intervals by their start time
    intervals.sort((a, b) => a[0] - b[0]);

    // Initialize the result with the first interval
    const merged: Interval[] = [intervals[0]];

    // Iterate through each interval
    for (let i = 1; i < intervals.length; i++) {
        const current = intervals[i];
        const lastMerged = merged[merged.length - 1];

        // Check if the current interval overlaps with the last merged interval
        if (current[0] <= lastMerged[1]) {
            // Merge the intervals by updating the end time of the last merged interval
            lastMerged[1] = Math.max(lastMerged[1], current[1]);
        } else {
            // No overlap, add the current interval to the result
            merged.push(current);
        }
    }

    return merged;
}

/**
 * Example usage of the mergeIntervals function.
 */
const intervals: Interval[] = [[1, 3], [2, 6], [8, 10]];
const result = mergeIntervals(intervals);
console.log(result); // Output: [[1, 6], [8, 10]]
