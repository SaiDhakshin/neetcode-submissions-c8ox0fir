class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let A = nums1;
        let B = nums2;

        let total = A.length + B.length;
        let half = Math.floor((total + 1)/2);

        if(A.length > B.length){
            [A,B] = [B,A];
        }

        let l = 0; let r = A.length;
        while(l <= r){
            let i = Math.floor((l+r)/2);
            let j = half - i;

            let Aleft = i > 0 ? A[i - 1] : -Infinity;
            let Aright = i < A.length ? A[i] : Infinity;
            let Bleft = j > 0 ? B[j - 1] : -Infinity;
            let Bright = j < B.length ? B[j] : Infinity;

            console.log('Aleft,Aright,Bleft,Bright',Aleft,Aright,Bleft,Bright)

            if(Aleft <= Bright && Aright >= Bleft){
                if(total % 2 != 0){
                    return Math.max(Aleft, Bleft)
                } else {
                    return (Math.max(Aleft, Bleft) + Math.min(Aright,Bright))/2;
                }
            }else if(Aleft > Bright){
                r = i - 1;
            }else {
                l = i + 1;
            }
        }
        return -1
    }
}
