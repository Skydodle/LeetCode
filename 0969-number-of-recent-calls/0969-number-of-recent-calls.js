


/** 
 * @param {number} t
 * @return {number}
 */
class RecentCounter {
    constructor(){
        this.queue = [];
        this.expiredIdx = 0;
    }
    
    ping(t) {
        let min = t - 3000;
        this.queue.push(t);

        while(min > this.queue[this.expiredIdx]) {
            this.expiredIdx++;
        }

        return this.queue.length - this.expiredIdx;
    }
}

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */