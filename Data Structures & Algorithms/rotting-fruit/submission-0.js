class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let fresh = 0;
        let time = 0;
        let q = [];

        for(let r = 0; r < grid.length; r++){
            for(let c = 0; c < grid[0].length; c++){
                if(grid[r][c] == 1){
                    fresh++;
                }
                if(grid[r][c] == 2){
                    q.push([r,c]);
                }
            }
        }

        const directions = [[1,0],[-1,0],[0,-1],[0,1]];

        while(q.length && fresh > 0){
            const len = q.length;
            for(let i = 0; i < len; i++){
                const [row, col] = q.shift();

                for(const [dr,dc] of directions){
                    const r = dr + row;
                    const c = dc + col;

                    if(r >= 0 && r < grid.length && c >= 0 && c < grid[0].length && 
                        grid[r][c] == 1){
                            grid[r][c] = 2;
                            q.push([r,c]);
                            fresh--;
                        }
                }
            }
            time++;
        }
        return fresh == 0 ? time : -1;
    }
}
