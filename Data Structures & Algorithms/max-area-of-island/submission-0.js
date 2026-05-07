class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {

        let ROWS = grid.length;
        let COLS = grid[0].length;
        let area = 0;

        const dfs = (r,c) => {

            if(r < 0 || c < 0 || r >= ROWS || c >= COLS || grid[r][c] == 0){
                return 0;
            }

            grid[r][c] = 0;

            let res = 1;

            res += dfs(r+1,c);
            res += dfs(r-1,c);
            res += dfs(r,c+1);
            res += dfs(r,c-1);

            return res;
        }

        for(let r = 0; r < ROWS; r++){
            for(let c = 0; c < COLS; c++){
                if(grid[r][c] == 1){

                area = Math.max(area, dfs(r,c));
                }
            }
        }

        return area;
    }
}
