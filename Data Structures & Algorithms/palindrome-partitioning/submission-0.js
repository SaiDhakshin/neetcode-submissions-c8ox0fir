class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        let res = [];
        let part = [];
        this.dfs(res,part,0, s);
        return res;
    }

    dfs(res, part, i, s){
        if(i >= s.length){
            res.push([...part]);
            return;
        }
        for(let j = i; j < s.length; j++){
            if(this.isPalin(s,i,j)){
                part.push(s.substring(i,j+1));
                this.dfs(res,part,j+1, s);
                part.pop();
            }
        }
    }

    isPalin(s,i,j){
        while(i < j){
            if(s[i] != s[j]){
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
}
