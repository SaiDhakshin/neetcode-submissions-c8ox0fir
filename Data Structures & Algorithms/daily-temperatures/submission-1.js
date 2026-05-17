class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        console.log(temperatures)
        const res = Array.from({ length: temperatures.length }).fill(0);
        const stack = [];

        for(let i = 0; i < temperatures.length; i++){

            while(stack.length && temperatures[i] > stack[stack.length - 1][0]){
                let [t,idx] = stack.pop();
                res[idx] = i - idx;
            }
            
            stack.push([temperatures[i], i])
        }

        console.log(stack)

        return res;
    }
}
