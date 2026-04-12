class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t == '') return ''

        let count = {}; let window = {};
        let res = [-1,-1]; let resLen = Infinity;
        let l = 0;

        for(let i = 0; i < t.length; i++){
            count[t[i]] = (count[t[i]] || 0) + 1;
        }

        // console.log(count);
        let have = 0; let need = Object.keys(count).length;
        // console.log(need);

        for(let r = 0; r < s.length; r++){
            window[s[r]] = (window[s[r]] || 0) + 1;

            // console.log(window[s[r]],count[s[r]])
            // console.log(window);
            if(window[s[r]] == count[s[r]]){
                have++;
            }

            // console.log(have);

            while(have == need){
                if(r - l + 1 < resLen){
                    resLen = r - l + 1;
                    res = [l,r];
                }
                
                window[s[l]]--;
                if(count[s[l]] && window[s[l]] < count[s[l]]){
                    have--;
                }
                l++
            }
        }
        return resLen == Infinity ? '' : s.slice(res[0], res[1] + 1);
    }
}
