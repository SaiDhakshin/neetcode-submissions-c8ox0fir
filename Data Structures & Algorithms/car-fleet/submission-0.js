class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        //form pair
        let pair = position.map((p,idx) => [p, speed[idx]]);
        let stack = [];
        //sort in descending
        pair.sort((a,b) => b[0] - a[0]);
        //push time to stack
        for(let [p,s] of pair){
            stack.push((target - p)/s);
            console.log(stack);
            //if stack len > 2 then check if forming fleet with stack, if so pop
            if(stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]){
                stack.pop();
            }
        }
        return stack.length;
    }
}
