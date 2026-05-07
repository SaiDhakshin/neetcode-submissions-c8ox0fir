/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        const map = new Map();
        const dfs = (node) => {
            if(!node){return null;}
            if(map.has(node)){
                return map.get(node);
            }

            //create clone
            const copy = new Node(node.val);
            map.set(node, copy);

            //add neighbours
            for(let n of node.neighbors){
                copy.neighbors.push(dfs(n))
            }

            return copy;
        }
        return dfs(node);
    }
}
