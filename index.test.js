const { Stack, Queue } = require('./index.js')
describe('Stack Class', () => {
  it('#push should add a new item to the stack ', () => {
    const stack = new Stack()
    stack.push('fox')
    expect(stack.count).toEqual(1)
  })
  it('#peek should return the top item on the stack', () => {
    const stack = new Stack()
    stack.push('fox')
    stack.push('goose')
    expect(stack.peek).toEqual('goose')
  })
  it('#pop should remove the top item on the stack', () => {
    const stack = new Stack()
    stack.push('fox')
    stack.push('goose')
    stack.push('lizard')
    const item = stack.pop()
    expect(item).toEqual('lizard')
    expect(stack.count).toBe(2)
  })
})

describe('Queue Class', () => {
  it.only('#enqueue should add an item to the back', () => {
    const queue = new Queue()
    queue.enqueue('fox')
    queue.enqueue('goose')
    expect(queue.count).toBe(2)
    expect(queue.next).toBe('fox')
  })
  it.only('#denqueue should add an item to the back', () => {
    const queue = new Queue()
    queue.enqueue('fox')
    queue.enqueue('goose')
    const item = queue.dequeue()
    expect(queue.count).toBe(1)
    expect(queue.next).toBe('goose')
    expect(item).toBe('fox')
  })
})
