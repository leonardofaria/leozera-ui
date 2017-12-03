const childProcess = require('child_process')

const toError = (stdout) => {
  const error = stdout.toString('utf8')
  if (error.length > 0) {
    console.log(error) // eslint-disable-line no-console
  }
}

const getFiles = (cmd) => {
  let styleFiles = null

  try {
    const str = childProcess.execSync(cmd).toString('utf8')
    styleFiles = str.split(/(\r?\n)/g).filter((line) => !(line === '\n' || line === '\r' || line.length < 1))
  } catch (e) {
    toError(e.stdout)
  }

  return styleFiles
}

module.exports = {
  toError,
  getFiles,
}
