class TrieNode{
    constructor(){
        this.children = new Map();
        this.endOfWord = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let cur = this.root;
        for(let c of word){
            if(!cur.children.has(c)){
                cur.children.set(c,new TrieNode());
            }
            cur = cur.children.get(c);
        }
        cur.endOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        
        const dfs = (node , i) => {
            if(i == word.length){
                return node.endOfWord;
            }
            
            let c = word[i];

            if(c == '.'){
                for(let child of node.children.values()){
                    if(dfs(child, i + 1)){
                        return true;
                    }
                }
                return false;
            }

            if(!node.children.has(c)){
                return false;
            }

            return dfs(node.children.get(c),i+1);
        }
        return dfs(this.root,0);
    }
}
