const childProcess = require('child_process')
const path = require('path')
const util = require('./util')

let exitCode = 0

const buildFiles = (files) => {
  if (files) {
    files.forEach((file) => {
      try {
        console.log(`Building ${file}`) // eslint-disable-line no-console

        const sass = path.join(__dirname, '../node_modules/.bin/node-sass')
        const output = file.replace('lib/components', 'dist')
        childProcess.execSync(`${sass} ${file} ${output}`).toString('utf8')
      } catch (e) {
        util.toError(e.stdout)
        exitCode = 1
      }
    })
  }
}

const styleFiles = util.getFiles('find lib/components -name "*.scss"')
buildFiles(styleFiles)

process.exit(exitCode)
