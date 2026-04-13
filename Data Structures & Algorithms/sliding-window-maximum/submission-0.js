class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        console.log(nums.length);
        let n = nums.length;
        let output = new Array(n-k+1);
        let q = new Deque();
        let l = 0; let r = 0;

        while(r < n){
            while(q.size() && nums[q.back()] < nums[r]){
                q.popBack();
            }

            q.pushBack(r);

            if(l > q.front()){
                q.popFront();
            }

            if(r + 1 >= k){
                output[l] = nums[q.front()];
                l++;
            }
            r++;
        }
        return output;
    }
}
