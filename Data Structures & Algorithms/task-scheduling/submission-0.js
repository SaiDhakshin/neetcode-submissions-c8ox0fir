class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const maxHeap = new MaxPriorityQueue();
        const q = new Queue();
        let time = 0;
        let t = new Array(26).fill(0);

        for(let task of tasks){
            t[task.charCodeAt(0) - 'A'.charCodeAt(0)]++;
        }

        for(let i = 0; i < 26; i++){
           if (t[i] > 0){
            maxHeap.enqueue(t[i]);
           }
        }

        while(maxHeap.size() > 0 || q.size() > 0){
            time += 1;
            if(maxHeap.size() > 0){
                let job = maxHeap.dequeue() - 1;
                if(job > 0){
                    q.push([job, time + n])
                }
            }

            if( q.size() > 0 && q.front()[1] == time){
                maxHeap.enqueue(q.pop()[0]);
            }
        }
        return time;
    }
}
