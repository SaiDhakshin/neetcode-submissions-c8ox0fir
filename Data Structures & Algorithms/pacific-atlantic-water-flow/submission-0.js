class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let ROWS = heights.length;
        let COLS = heights[0].length;

        let result = [];

        let atlantic = new Set();
        let pacific = new Set();
        //pacific
        const dfs = (r,c,visited, prevHeight) => {
            if(r < 0 || c < 0 || c >= COLS || r >= ROWS || heights[r][c] < prevHeight){
                return;
            }

            const key = `${r},${c}`;

            if(visited.has(key)){
                return;
            }

            visited.add(key);
            dfs(r+1,c,visited,heights[r][c]);
            dfs(r-1,c,visited,heights[r][c]);
            dfs(r,c+1,visited,heights[r][c]);
            dfs(r,c-1,visited,heights[r][c]);
        }
        for(let r = 0; r < ROWS; r++){
            dfs(r,0, pacific, heights[r][0]);
        }

        for(let c = 0; c < COLS; c++){
            dfs(0,c, pacific, heights[0][c]);
        }
        //atlantic
        for(let r = 0; r < ROWS; r++){
            dfs(r,COLS - 1, atlantic, heights[r][COLS - 1]);
        }

        for(let c = 0; c < COLS; c++){
            dfs(ROWS - 1,c, atlantic, heights[ROWS - 1][c]);
        }

        

        for(let r = 0; r < ROWS; r++){
            for(let c = 0; c < COLS; c++){
                const key = `${r},${c}`;
                if(pacific.has(key) && atlantic.has(key)){
                    result.push([r,c]);
                }
            }
        }

        return result;
    }
}
