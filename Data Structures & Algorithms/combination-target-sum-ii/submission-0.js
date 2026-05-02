class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const res = [];
        const curr = []
        candidates.sort((a,b) => a - b);
        this.dfs(candidates, 0,curr,0,target, res);
        return res;
    }

    dfs(candidates, i , curr,total, target, res){
        if(target == total){
            res.push([...curr]);
            return;
        }

        if(total > target || i > candidates.length){
            return;
        }

        curr.push(candidates[i]);
        this.dfs(candidates, i + 1, curr, total + candidates[i], target, res);
        curr.pop();
        while( i + 1 < candidates.length && candidates[i] === candidates[i+1]){
            i++;
        }
        this.dfs(candidates, i + 1, curr, total, target, res);
    }
}
