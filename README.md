# detect-character-encoding

Very limited, but JavaScript only version of the original [detect-character-encoding](https://github.com/sonicdoe/detect-character-encoding) package. 

Meant to be used **only for development purposes** on Windows, which is not supported by the original package.

Use `npm link` to use this replacement locally.

## Installation

```console
$ npm install detect-character-encoding
```

## Usage

```js
const fs = require('fs');
const detectCharacterEncoding = require('detect-character-encoding');

const fileBuffer = fs.readFileSync('file.txt');
const charsetMatch = detectCharacterEncoding(fileBuffer);

console.log(charsetMatch);
// {
//   encoding: 'UTF-8',
//   confidence: 60
// }
```

detect-character-encoding may return `null` if no charset matches.

## License

detect-character-encoding is licensed under the BSD 2-clause license but includes third-party software under different licenses. See [`LICENSE.md`](./LICENSE.md) for the full license text.
