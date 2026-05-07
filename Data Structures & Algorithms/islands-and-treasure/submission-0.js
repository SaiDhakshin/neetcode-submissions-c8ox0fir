class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let ROWS = grid.length;
        let COLS = grid[0].length;

        let queue = [];

        for(let r = 0; r < ROWS; r++){
            for(let c = 0; c < COLS; c++){
                if(grid[r][c] == 0){
                    queue.push([r,c]);
                }
            }
        }

        while(queue.length){
            const [r,c] = queue.shift();


            const tryVisit = (nr,nc) => {
                if(nr >= 0 && nc >= 0 && nr < ROWS && nc < COLS && grid[nr][nc] == 2147483647){
                    grid[nr][nc] = grid[r][c] + 1;
                    queue.push([nr,nc]);
                }
            }

            tryVisit(r+1,c);
            tryVisit(r-1,c);
            tryVisit(r,c+1);
            tryVisit(r,c-1);
        }
    }
}
