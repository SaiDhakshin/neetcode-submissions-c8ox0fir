/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let dummy = new ListNode(0,head);
        let groupPrev = dummy;

        while(true){
            let kth = this.findKth(groupPrev, k);
            if(!kth){ break; }
            let groupNext = kth.next;
            let prev = kth.next;
            let curr = groupPrev.next;
            while(curr != groupNext){
                let temp = curr.next;
                curr.next = prev;
                prev = curr;
                curr = temp;
            }
            let tmp = groupPrev.next
            groupPrev.next = kth;
            groupPrev = tmp;
        }
        return dummy.next;
    }

    findKth(curr, k){
        while(k > 0 && curr){
            curr = curr.next;
            k--;
        }
        return curr;
    }


}
