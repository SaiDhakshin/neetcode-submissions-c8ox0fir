class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // console.log(strs)
        let encoded = '';

        for(let i = 0; i < strs.length; i++){
            encoded += strs[i].length + '#' + strs[i]
        }
        console.log(encoded);
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];

        console.log(str[0])
        let i = 0;
        while(i < str.length){
            let j = i;
            while(str[j] !== '#'){
                j++;
            }
            let strlength = parseInt(str.substring(i,j))
            i = j + 1;
            j = i + strlength;
            res.push(str.substring(i,j));
            i = j;
        }
        console.log(res);
        return res;
    }
}
