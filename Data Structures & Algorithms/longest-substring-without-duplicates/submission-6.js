class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set();
        let l = 0; let r = 0;
        let longest = 0;
        console.log('log dude')
        for(let le of s){
            console.log('le',le)
            if(set.has(le)){
                console.log('has le',le)
                
                while(set.has(le)){
                    set.delete(s[l]);
                    l++;
                }
                console.log('slid left', set)
            }
            set.add(le);
            longest = Math.max(longest, r - l + 1);
            r++;
        }

        return longest;
    }
}
