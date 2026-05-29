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
     * @return {boolean}
     */
    isValidBST(root) {

        return this.validTree(root,-Infinity,Infinity);

    }

    validTree(root, left, right){

        if(root == null){
            return true;
        }


        if(!(root.val > left && right > root.val)){
            return false;
        }


        return (this.validTree(root.left, left, root.val) && this.validTree(root.right, root.val, right))
    }
}
