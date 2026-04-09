class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let res = [];

        let prefix = 1;
        for(let i = 0; i < nums.length; i++){
            res[i] = prefix;
            prefix *= nums[i];
        }
        let suffix = 1;
        for(let i = nums.length - 1; i >= 0; i--){
            res[i] = suffix * res[i];
            suffix *= nums[i];
        }
        console.log(res);
        return res;
    }
}
