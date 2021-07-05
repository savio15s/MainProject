const twice = (f, v) => f(f(v))
const add3 = v => v + 3
twice(add3, 7) // 13

// Example #2

const filter = (predicate, xs) => xs.filter(predicate)
const is = type => x => Object(x) instanceof type
filter(is(Number), [0, '1', 2, null]) // [0, 2]

// Example #3

const withCounter = fn => {
  let counter = 0
  return (...args) => {
    console.log(`Counter is ${++counter}`)
    return fn(...args)
  }
}

const add = (x, y) => x + y
const countedSum = withCounter(add)
console.log(countedSum(2, 3))
console.log(countedSum(2, 1))