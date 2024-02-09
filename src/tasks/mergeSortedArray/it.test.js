const resolve = require('./resolve')
const resultGenerator = require('../../utility/resultGenerator')

const test = function (targetData) {
  const data = []
  for (const [input] of targetData) {
    const newDate = new Date().getTime()
    data.push([resolve(...input), new Date().getTime() - newDate])
  }

  return resultGenerator(data, targetData)
}

module.exports = test
