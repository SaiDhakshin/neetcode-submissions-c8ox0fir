class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let min = Infinity;
        let maxProfit = 0;

        for(let p of prices){
            min = Math.min(min, p);

            if(p > min){
                let profit = p - min;
                maxProfit = Math.max(maxProfit, profit);
            }
        }

        return maxProfit;
    }
}
