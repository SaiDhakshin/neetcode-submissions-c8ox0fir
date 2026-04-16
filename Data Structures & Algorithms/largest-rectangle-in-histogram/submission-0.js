class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let maxArea = 0; let stack = [];

        for(let i = 0; i <= heights.length; i++){
            console.log(heights[i] < stack[stack.length - 1])
            while(stack.length && (i == heights.length || heights[i] <= heights[stack[stack.length - 1]])){
                let height = heights[stack.pop()];
                let width = stack.length == 0 ? i : i - stack[stack.length - 1] - 1;

                maxArea = Math.max(maxArea, height * width);
            }
            stack.push(i);
        }
        console.log(stack);

        return maxArea;
    }
}
