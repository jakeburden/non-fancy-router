# non-fancy-router

> a non-fancy, minimalistic node.js server router

## Usage

```js
const { createServer } = require('http')
const nonfancy = require('non-fancy-router')

const router = nonfancy([
  ['/', 'index.html'],
  ['/about', 'about.html'],
  ['/styles.css', 'styles.css'],
  ['/*', function (req, res) {
    // otherwise 404
    res.statusCode = 404
    res.end('404')
  }]
])

createServer(router).listen(9090, () => {
  console.log('The server is running on http://localhost:9090')
})

```

## Install

With [npm](https://npmjs.org/) installed, run

```
$ npm install non-fancy-router
```

## License

MIT

