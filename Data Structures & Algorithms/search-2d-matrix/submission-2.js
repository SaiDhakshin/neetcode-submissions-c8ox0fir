class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const ROWS = matrix.length;
        const COLS = matrix[0].length;

        console.log('lengths',ROWS,COLS);

        let top = 0; let bot = ROWS - 1;
        while(top <= bot){
            let row = Math.floor((top + bot) / 2);

            console.log('middle',row,top,bot);

            if(target > matrix[row][COLS - 1]){
                top = row + 1;
            } else if(target < matrix[row][0]){
                bot = row - 1;
            } else {
                break;
            }
        }

        console.log('First while done:',top, bot);

        if(!(top<=bot)) return false;

        let l = 0; let r = COLS - 1;
        let row = Math.floor((top+bot)/2);
        console.log('the mid row',row);
        
        while(l<=r){
            let m = Math.floor((l+r)/2);
            console.log('the mid m',m);
            
            if(target > matrix[row][m]){
                console.log('t >',target,matrix[row][m])
                l = m + 1;
            } else if(target < matrix[row][m]){
                console.log('t <',target,matrix[row][m])
                r = m - 1;
            }else {
                console.log('t ==',target,matrix[row][m])
                return true
            }
        }

        return false;
    }
}
