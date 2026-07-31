/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    let left = 0;
    let windowSum = 0;
    let maxSum = 0;

    const freq = new Map();

    for (let right = 0; right < nums.length; right++) {

        windowSum += nums[right];
        freq.set(nums[right], (freq.get(nums[right]) || 0) + 1);

        if (right - left + 1 > k) {
            windowSum -= nums[left];

            freq.set(nums[left], freq.get(nums[left]) - 1);

            if (freq.get(nums[left]) === 0) {
                freq.delete(nums[left]);
            }

            left++;
        }

        if (right - left + 1 === k && freq.size === k) {
            maxSum = Math.max(maxSum, windowSum);
        }
    }

    return maxSum;
};