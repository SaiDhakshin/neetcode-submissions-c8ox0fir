class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let res = [];
        this.backtrack(0,0,res,n,'');
        return res;
    }

    backtrack(openN, closeN, res, n, stack){
        if(openN == closeN && closeN == n){
            res.push(stack);
            return;
        }

        if(openN < n){
            this.backtrack(openN + 1, closeN, res, n, stack + '(');
        }

        if(closeN < openN){
            this.backtrack(openN, closeN + 1, res, n, stack + ')');
        }
    }
}
