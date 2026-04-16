class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 0; let r = Math.max(...piles); let res = r;

        while(l <= r){
            let totalTime = 0;
            let k = Math.floor((l+r)/2);

            console.log('k is:',k);

            for(const p of piles){
                totalTime += Math.ceil(p/k);
            }

            console.log('Total Time:', totalTime);

            if(totalTime <= h){
                res = Math.min(res,k);
                r = k - 1;
            } else {
                l = k + 1;
            }
            console.log('l,r,res',l,r,res);
        }
        return res;
    }
}
