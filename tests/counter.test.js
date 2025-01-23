// Create two test cases for incrementing and decrementing a number
// Test case 1: counter(10, 'increment') will eventualy return 10
// Test case 2: counter(10, 'decrement') will eventually return 0
// Both test cases need to pass
// HINT: Use the jest `resolves` matcher so that it is easier to work with async functions

const counter = require('../src/counter')

test("4 and increment return 4", () => {
    return expect(counter(4, 'increment')).resolves.toBe(4)
})

test('4 and decrement, return 0', () => {
    return expect(counter(4, 'decrement')).resolves.toBe(0)
})