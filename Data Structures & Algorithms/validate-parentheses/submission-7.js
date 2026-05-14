class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        let map = {
            '{':'}',
            '[':']',
            '(':')'
        }
        
        

        for(let l of s){
            if(l == '(' || l == '{' || l == '['){
                stack.push(l);
            }else{
                if(!s.length) return true;
                let last = stack.pop();
                console.log(map[last],last)
                if(map[last] != l){
                    return false;
                }
            }
        }
        return stack.length == 0;
    }
}
