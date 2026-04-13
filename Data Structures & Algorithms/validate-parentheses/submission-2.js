class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let st = [];
        let input = s.split('');
        let map = {
            "{": "}",
            "(": ")",
            "[":"]"
        }


        for(let i = 0 ; i < input.length; i++){
            if(input[i] == '(' || input[i] == '{' || input[i] == '['){
                console.log('in',input[i])
                st.push(input[i]);
            }else{
                if(st.length == 0){ return false; }
                let top = st.pop();
                console.log(map[top], input[i])
                if(map[top] != input[i]){
                    return false;
                }
            }
        }
        return st.length == 0;
    }
}
