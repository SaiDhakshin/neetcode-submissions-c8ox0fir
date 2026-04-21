class Node{
    constructor(key, val){
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cap = capacity;
        this.cache = new Map();
        this.left = new Node(0,0);
        this.right = new Node(0,0);
        this.left.next = this.right;
        this.right.prev = this.left;
    }

    remove(node){
        let prev = node.prev;
        let next = node.next;
        prev.next = next;
        next.prev = prev;
    }

    insert(node){
        let prev = this.right.prev;
        prev.next = node;
        node.next = this.right;
        node.prev = prev;
        this.right.prev = node;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        console.log('get', this.cache.size);
        if(this.cache.has(key)){
            let node = this.cache.get(key);
            this.remove(node);
            this.insert(node);
            return node.val;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.cache.get(key)){
            this.remove(this.cache.get(key));
        }
        const newNode = new Node(key, value);
        this.cache.set(key, newNode);
        this.insert(newNode);

        console.log('this.cap < this.cache.size',this.cap ,this.cache.size)
        if(this.cap < this.cache.size){
            let lru = this.left.next;
            this.cache.delete(lru.key);
            this.remove(lru);
        }
    }
}
