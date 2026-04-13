class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {

        let stack = [];
        let res = new Array(temperatures.length).fill(0);

        for(let i = 0; i < temperatures.length; i++){

            while(stack.length && temperatures[i] > stack[stack.length - 1][0]){
                const [temp, idx] = stack.pop();
                console.log(temp, idx);
                res[idx] = i - idx;
            }
            stack.push([temperatures[i], i]);
        }
        return res;
    }
}
