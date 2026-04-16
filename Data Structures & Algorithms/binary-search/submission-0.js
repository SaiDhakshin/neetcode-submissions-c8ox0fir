class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    

    bsearch(arr,l,r,k){

        let mid = Math.floor((l+r)/2);

        if(l > r) return -1;

        if(arr[mid] == k){
            return mid;
        }

        else if(arr[mid] > k){
            return this.bsearch(arr,l, mid-1, k);
        }

        else {
            return this.bsearch(arr,mid + 1, r, k);
        }

    }

    search(nums, target) {

        return this.bsearch(nums, 0, nums.length - 1, target);
    }
}
