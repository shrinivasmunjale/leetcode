/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left= 0;
    let zerocount = 0;
    let maxlength = 0;

    for(let i=0; i<nums.length ; i++){
        if(nums[i]==0){
            zerocount ++;
        }
        while(zerocount > k){
            if(nums[left]=== 0){
                zerocount --;
            }
            left++;
        }
        maxlength = Math.max(maxlength , i-left+1);

    }
    return maxlength;
    
};