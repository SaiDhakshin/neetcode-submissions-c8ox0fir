class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0; let left = 0; let right = heights.length - 1;

        while(left < right){
            let width = right - left;
            let area = Math.min(heights[left], heights[right]) * width;

            max = Math.max(area, max);

            if(heights[left] < heights[right]){
                left++;
            } else {
                right--;
            }
        }

        return max;
    }
}
