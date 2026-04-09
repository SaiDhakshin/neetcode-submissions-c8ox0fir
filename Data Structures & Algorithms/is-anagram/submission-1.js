class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let w1 = s.split('');
        let w2 = t.split('');

        // console.log(w1.sort(), w2.sort())

        if(w1.sort().join('') == w2.sort().join('')){
            return true;
        } else {
            return false;
        }
    }
}
