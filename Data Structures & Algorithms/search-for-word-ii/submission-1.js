class TrieNode{
    constructor(){
        this.children = new Map();
        this.word = null;
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {

        let root = new TrieNode();
        for(let word of words){
            let node = root;
            for(let c of word){
                if(!node.children.has(c)){
                    node.children.set(c,new TrieNode());
                }
                node = node.children.get(c);
            }
            node.word = word;
        }

        const ROWS = board.length;
        const COLS = board[0].length;

        let res = [];

        const dfs = (r,c,node) => {
            if(r < 0 || c < 0 || r >= ROWS || c >= COLS){
                return
            }

            const char = board[r][c];

            if(char == '#' || !node.children.has(char)){
                return;
            }

            node = node.children.get(char);

            if(node.word != null){
                res.push(node.word);
                node.word = null;
            }

            board[r][c] = '#';

            dfs(r + 1,c,node);
            dfs(r - 1,c,node);
            dfs(r,c + 1,node);
            dfs(r,c - 1,node);

            board[r][c] = char;
        }

        for(let r = 0; r < ROWS; r++){
            for(let c = 0; c < COLS; c++){
                dfs(r,c,root);
            }
        }

        return res;
    }
}
