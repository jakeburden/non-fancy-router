const { parse } = require('url')
const { createReadStream } = require('fs')
const murl = require('murl')

function router (routes) {
  return function (req, res) {
    const { pathname } = parse(req.url)
    routes.some(route => {
      const [pattern, fn] = route
      const match = murl(pattern)(pathname)
      if (match) {
        typeof fn === 'function' ? fn(req, res) : send(fn, res)
        return true
      }
    })
  }
}

function send (filename, res) {
  createReadStream(filename).pipe(res)
}

module.exports = router
