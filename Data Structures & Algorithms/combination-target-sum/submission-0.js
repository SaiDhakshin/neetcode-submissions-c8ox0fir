class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let res = [];
        let subset = []
        this.dfs(nums,0,subset,res,target,0);
        return res;
    }

    dfs(nums,i,subset,res,target, sum){

       if(sum == target){
        return res.push([...subset]);
       }

       if(i >= nums.length || sum > target){
        return;
       }

       subset.push(nums[i]);
       this.dfs(nums, i, subset, res, target, sum + nums[i]);
       subset.pop();
       this.dfs(nums,i + 1, subset, res, target, sum);

        
    }
}
