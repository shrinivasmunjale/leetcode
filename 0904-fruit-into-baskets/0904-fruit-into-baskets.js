/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let left = 0;
    let maxlength =0 ;

    const map = new Map();

    for(let right = 0 ; right < fruits.length ; right ++){

        map.set(fruits[right],(map.get(fruits[right])||0)+1);

        while(map.size > 2){
            map.set(fruits[left], map.get(fruits[left])-1);

            if(map.get(fruits[left])===0){
                map.delete(fruits[left]);
            }
            left ++;
        }

        maxlength =Math.max(maxlength , right-left +1);

    }

    return  maxlength;

    
};