class Stack {
  #list

  constructor(list) {
    this.#list = list || []
  }

  get count() {
    return this.#list.length
  } //this allows us to not expose the list and talk about count instead

  push(newItem) {
    this.#list.push(newItem)
  }

  pop() {
    return this.#list.pop()
  }

  peek() {
    return this.#list[this.#list.length - 1]
    //peek says what is the top thing that will be removed?
  }
}

class Queue {
  #list

  constructor(list) {
    this.#list = list || [] //either take what I pass you or use an empty array default
  }

  get count() {
    return this.#list.length
  }

  get next() {
    //next tells you who is next in line
    return this.#list[0]
  }

  enqueue(item) {
    this.#list.push(item)
    console.log(this.#list.length)
    //add to end of array
  }

  dequeue() {
    return this.#list.shift()
    // this.#list.splice(0, 1) //this won't work because it only operates on a copy, not the original.
    // return this.#list
    //pull from beginning of array
  }

  hasNext() {
    if (this.#list.length === this.#list.length - 1) return false //if it's the last one, return false.
    return true
  }
}

module.exports = { Stack, Queue }
