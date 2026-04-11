class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let min=999;
        let max=0;

        for(let i = 0; i < prices.length; i++){
            if(prices[i] < min){
                min = Math.min(prices[i], min);
            }else {
                let profit = prices[i] - min;
                max = Math.max(max, profit);
            }
        }

        return max;
    }
}
