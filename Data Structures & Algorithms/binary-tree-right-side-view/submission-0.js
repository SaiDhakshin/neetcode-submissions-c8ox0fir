/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        let res = [];
        const q = new Queue();

        q.push(root);
        while(!q.isEmpty()){
            let qlen = q.size();
            let rightSide = null;
            for(let i = 0; i < qlen; i++){
                let node = q.pop();
                if(node){
                    rightSide = node;
                    q.push(node.left);
                    q.push(node.right);
                }
                
            }
            if(rightSide){
                res.push(rightSide.val);
            }
        }
        return res;
    }
}
