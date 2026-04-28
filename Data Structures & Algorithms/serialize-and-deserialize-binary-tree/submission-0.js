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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        const res = [];
        this.dfsSerialize(root, res);
        console.log('bun',res.join(','))
        return res.join(',');
    }

    dfsSerialize(node, res){
        if(node === null){
            res.push('N');
            return;
        }

        res.push(node.val.toString());
        this.dfsSerialize(node.left, res);
        this.dfsSerialize(node.right, res);
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        let vals = data.split(',');
        let i = { val: 0 };
        return this.dfsDeserialize(vals,i)
    }

    dfsDeserialize(vals, i){
        if(vals[i.val] == 'N'){
            i.val += 1;
            return null;
        }
        let node = new TreeNode(Number(vals[i.val]));
        i.val += 1;
        node.left = this.dfsDeserialize(vals, i);
        node.right = this.dfsDeserialize(vals, i);

        return node;
    }
}
