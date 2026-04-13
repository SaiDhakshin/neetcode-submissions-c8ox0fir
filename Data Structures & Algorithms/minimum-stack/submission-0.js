class MinStack {
    constructor() {
        this.st = [];
        this.minSt = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.st.push(val);
        if(val <= this.minSt[this.minSt.length - 1] || !this.minSt.length){
            this.minSt.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        let popped = this.st.pop();
        if(this.minSt[this.minSt.length - 1] == popped){
            this.minSt.pop();
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.st[this.st.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minSt[this.minSt.length - 1]
    }
}
