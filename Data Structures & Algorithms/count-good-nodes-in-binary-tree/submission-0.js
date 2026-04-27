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
     * @return {number}
     */
    goodNodes(root) {
        return this.dfs(root, root.val);
    }

    dfs(node, maxValue){
        if(!node){
            return 0;
        }
        
        let res = node.val >= maxValue ? 1 : 0;
        maxValue = Math.max(maxValue, node.val);
        res += this.dfs(node.left, maxValue);
        res += this.dfs(node.right, maxValue);

        return res;
    }
}
