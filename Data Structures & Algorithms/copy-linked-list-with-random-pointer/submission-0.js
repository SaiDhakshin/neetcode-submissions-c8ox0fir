// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let toCopy = new Map();
        toCopy.set(null,null);

        let cur = head;
        while(cur){
            let val = new Node(cur.val);
            toCopy.set(cur, val);
            cur = cur.next;
        }
        console.log('toCopy',toCopy)
        cur = head;
        while(cur){
            let copy = toCopy.get(cur);
            copy.next = toCopy.get(cur.next);
            copy.random = toCopy.get(cur.random);
            cur = cur.next;
        }
        console.log('final',toCopy);
        return toCopy.get(head);
    }
}
