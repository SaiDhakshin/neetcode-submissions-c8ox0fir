class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0; let r = nums.length - 1; let res = nums[0];

        while(l <= r){
            if(nums[l] <= nums[r]){
                console.log('nums[l] < nums[r]',nums[l] , nums[r])
                res = Math.min(res, nums[l]);
                break;
            }

            let m = Math.floor((l + r)/2);
            res = Math.min(res, nums[m]);
            console.log('nums[m] > nums[l])',nums[m] , nums[l])
            if(nums[m] >= nums[l]){
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
        return res;
    }
}
