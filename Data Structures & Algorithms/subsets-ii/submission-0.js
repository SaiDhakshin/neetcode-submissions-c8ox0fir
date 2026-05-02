class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        let res = [];
        let subset = [];
        nums.sort((a,b) => a - b);
        this.backtrack(0,res,subset,nums);
        return res;
    }

    backtrack(i,res,subset, nums){
        if(i == nums.length){
            res.push([...subset]);
        }

        if(i > nums.length){
            return;
        }

        subset.push(nums[i]);
        this.backtrack(i + 1, res,subset, nums);
        subset.pop();
        while(i + 1 < nums.length && nums[i] == nums[i + 1]){
            i++;
        }
        this.backtrack(i+1,res,subset,nums);
        return res;
    }
}
