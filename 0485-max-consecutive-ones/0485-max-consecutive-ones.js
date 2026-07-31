/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let length =0;
    let maxlenght =0;

    for(let i=0; i<nums.length ;i++){
        if(nums[i]==1 ){
            length ++;
        maxlenght = Math.max(maxlenght, length);

        }
        else{
            length =0;
        }
    }
    return maxlenght;
    
};