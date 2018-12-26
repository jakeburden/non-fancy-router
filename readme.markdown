# non-fancy-router

> a non-fancy, minimalistic node.js server router

The JavaScript here is _very_ ✨ fancy ✨, but the router itself is not. Just pass it [a route, then a filename 📂 or function λ], and if the user goes to that route, the server will send that file or run that function.

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

## API

```js
nonfancy([
  [UrlPattern, FileName || Function]
])
```

Pass non-fancy-router an array of routing arrays.  The first routing array argument is a [murl pattern](https://github.com/mafintosh/murl), the second routing array argument is either the name of the you want to send from your server, or a function.

## Install

With [npm](https://npmjs.org/) installed, run

```
$ npm install non-fancy-router
```

## License

MIT

