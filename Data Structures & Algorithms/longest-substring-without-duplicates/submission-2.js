class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0; let r = 0;
        let set = new Set();
        let max = 0;
        console.log('working')

        while(l <= r && r < s.length){
            console.log('set',l , r);
            if(set.has(s[r])){
                while(set.has(s[r]) && l <= r){
                    set.delete(s[l]);
                    l++;
                }
            }

            set.add(s[r]);
            r++;
            console.log('set add',set);
            max = Math.max(max, r - l);
            console.log('max',max)
        }
        return max;
    }
}
