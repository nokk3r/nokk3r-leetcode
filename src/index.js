const mergeSortedArray = require('./tasks/mergeSortedArray')
const chalk = require('chalk')

const start = () => {
  const resultData = mergeSortedArray()
  console.clear()

  console.log(`\nTime: ${resultData.time}`)
  console.log(`${chalk.green('Passed: ')}${chalk.green(resultData.passed)}`)

  console.log(`${chalk.red('No passed: ')}${chalk.red(resultData.notPassed)}\n`)

  if (resultData.notPassed > 0) {
    console.log(`${chalk.dim('--- More no pass info ---')}`)

    for (const data of resultData.notPassedData) {
      console.log(`\nNumber: ${data.number}`)
      console.log(`time: ${data.time}`)
      console.log('inputData:', data.inputData)
      console.log('result:', data.result)
      console.log('except:', data.except, '\n')
    }
  }
}

module.exports = () => {
  start()
}
