class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let res = [];
        const maxHeap = new PriorityQueue((a,b) => b[0] - a[0]);

        for(const [x,y] of points){
            let dist = x**2 + y**2;
            maxHeap.push([dist,x,y]);

            if(maxHeap.size() > k){
                maxHeap.pop();
            }
        }

        while(maxHeap.size()){
            let co = maxHeap.pop();
            res.push([co[1], co[2]]);
        }

        return res;
    }
}
