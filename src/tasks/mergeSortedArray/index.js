const test = require('./it.test')

const stargetData = [
  [[[1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 2], [1, 2, 2, 3, 5, 6]],
  [[[1], 1, [], 0], [1]]
]

const start = () => {
  const data = test(stargetData)
  return data
}

module.exports = start
