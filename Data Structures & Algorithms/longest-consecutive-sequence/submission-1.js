class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let maxLongest = 0;

        for(let n of nums){

            let longest = 1;
            let curr = n;
            if(!set.has(curr - 1)){
                console.log(curr);
                while(set.has(curr + 1)){
                    curr++;
                    longest++;
                }
            }
            maxLongest = Math.max(longest, maxLongest)
        }
        return maxLongest;
    }
}
