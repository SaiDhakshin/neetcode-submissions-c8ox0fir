class Twitter {
    constructor() {
        this.count = 0;
        this.tweetMap = new Map();
        this.followMap = new Map();
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        if(!this.tweetMap.has(userId)){
            this.tweetMap.set(userId, []);
        }

        this.tweetMap.get(userId).push([this.count++,tweetId]);
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {

        const res = [];
        const maxHeap = new PriorityQueue((a,b) => b[0] - a[0]);

        if(!this.followMap.has(userId)){
            this.followMap.set(userId, new Set());
        }

        this.followMap.get(userId).add(userId);

        for(const followee of this.followMap.get(userId)){

            if(!this.tweetMap.has(followee)){
                continue;
            }

            const tweet = this.tweetMap.get(followee);
            let idx = tweet.length - 1;

            const [count, tweetId] = tweet[idx];

            maxHeap.enqueue([count, tweetId, followee, idx - 1]);
        }

        while(maxHeap.size() > 0 && res.length < 10){
            const [count, tweetId, followeeId, idx] = maxHeap.dequeue();

            res.push(tweetId);

            if(idx >= 0){
                const [olderCount, olderTweetId] = this.tweetMap.get(followeeId)[idx];
                maxHeap.enqueue([olderCount, olderTweetId, followeeId, idx - 1]);
            }
        }

        return res;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if(!this.followMap.has(followerId)){
            this.followMap.set(followerId, new Set());
        }

        this.followMap.get(followerId).add(followeeId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if(this.followMap.has(followerId)){
            this.followMap.get(followerId).delete(followeeId);
        }
    }
}
