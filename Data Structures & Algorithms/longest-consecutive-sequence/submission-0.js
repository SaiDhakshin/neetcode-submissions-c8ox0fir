class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numSet = new Set(nums);
        let count = 0;
        let maxCount = 0;

        for(let num of numSet){
            if(!numSet.has(num - 1)){
                count = 1;
                while(numSet.has(num + count)){
                    count++;
                }
                maxCount = Math.max(maxCount, count);
            }
        }

        return maxCount;
    }
}
