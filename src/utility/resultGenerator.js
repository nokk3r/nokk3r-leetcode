function arraysEqual (a, b) {
  if (a === b) return true
  if (a == null || b == null) return false
  if (a.length !== b.length) return false

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.
  // Please note that calling sort on an array will modify that array.
  // you might want to clone your array first.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false
  }
  return true
}

const generator = function (data, testData) {
  const time = new Date().getTime()
  const stats = {
    time: 0,
    passed: 0,
    notPassed: 0,
    notPassedData: []
  }
  let i = 0
  for (const [input, output] of testData) {
    if (arraysEqual(data[i][0], output)) {
      stats.passed += 1
    } else {
      stats.notPassed += 1
      stats.notPassedData.push({ number: i + 1, time: data[i][1], inputData: input, result: data[i][0], except: output })
    }
    i++
  }

  stats.time = new Date().getTime() - time

  return stats
}

module.exports = generator
