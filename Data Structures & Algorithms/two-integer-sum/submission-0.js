class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        let map = new Map();

        for(let i = 0; i < nums.length; i++){
            let complement = target - nums[i];
            console.log(complement);

            if(map.has(complement)){
                return [i,map.get(complement)];
            }
            map.set(nums[i], i);
            console.log(map);
        }
    }
}
