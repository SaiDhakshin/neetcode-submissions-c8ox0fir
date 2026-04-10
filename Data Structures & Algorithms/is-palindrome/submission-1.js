class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;
        while(left < right){
            while(s[left] && !this.isAlphaNum(s[left])){
                left++;
            }
            while(s[right] && !this.isAlphaNum(s[right])){
                right--;
            }
            console.log(s[left],s[right])
            if(s[left]?.toLowerCase() != s[right]?.toLowerCase()){
                return false
            }
            left++; right--;
        }
        return true;
    }

    isAlphaNum(c){
        return(
            (c >= 'A' && c <= 'Z')||
            (c >= 'a' && c <= 'z')||
            (c >= '0' && c <= '9')
        );
    }
}
