const Stack = function () {
  const stack = [];
  return {
    get length() {
      return stack.length
    },
    push: x => stack.push(x),
    pop: () => stack.pop(),
    peek: () => stack[stack.length - 1]
  }
}


const MyQueue = function() {
  this.stack1 = Stack();
  this.stack2 = Stack();
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.stack2.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if (this.stack1.length) {
    return this.stack1.pop();
  }
  while (this.stack2.length) {
    this.stack1.push(this.stack2.pop())
  }
  return this.stack1.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  if (this.stack1.length) {
    return this.stack1.peek()
  }
  while (this.stack2.length) {
    this.stack1.push(this.stack2.pop())
  }
  return this.stack1.peek()
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.stack1.length === 0 && this.stack2.length === 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */