class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t == " "){return " "}
        let count = {};
        let window = {};
        let resLen = Infinity;
        let res = [-1,-1];

        let l = 0;
        for(let ch of t){
            count[ch] = (count[ch] || 0) + 1; 
        }
        let have = 0; let need = Object.keys(count).length;
        // console.log('need, count',need, count);

        for(let r = 0; r < s.length; r++){
            let c = s[r];
            window[c] = (window[c] || 0) + 1;

            if(count[c] && window[c] == count[c]){
                have++;
            }
            // console.log(have == need)

                    
            while(have == need){
                if(r - l + 1 < resLen){
                    let len = r - l + 1;
                    resLen = Math.min(len, resLen);
                    res = [l,r];
                    console.log('res',res)
                }

                window[s[l]]--;

                if(window[s[l]] < count[s[l]] && count[s[l]]){
                    have--;
                }

                l++;
            }
        }

        return resLen == Infinity ? '' : s.slice(res[0],res[1] + 1);
    }
}
