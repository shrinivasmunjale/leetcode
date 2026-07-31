/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    let left = 0;
    let right = height.length - 1;
    let ans = 0;

    while (left < right ){
        let width = right - left ;
        let high = Math.min(height[left], height[right]);

        ans = Math.max(ans , width*high );
        if(height[left]<height[right]){
            left++;
        }
        else{
            right --;
        }
    }
    return ans;
    
};