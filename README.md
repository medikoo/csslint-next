# csslint-next
## Customized version of [CSSLint](https://github.com/CSSLint/csslint/)

It contains original [CSSLint](https://github.com/CSSLint/csslint/), together with customized [parser-lib](https://github.com/CSSLint/parser-lib)

### Differences from original:

- Implied support for [CSS variables](http://www.w3.org/TR/css-variables/) syntax
- Added [additional rules](#additional-rules), that help maintain desired whitespace conventions

### Installation

	$ npm install csslint-next

#### Additional Rules

List of additional rules implemented within this package.

#### eol-at-eof

Require end of line (`\n` - _LINE FEED_) character at end of file

#### eol

Require strictly _unix_ end of line (`\n` - _LINE FEED_) characters, any other end of lines (specifically: `\r` - _CARRIAGE RETURN_) are reported as errors

#### multi-eol

Do not allow more than two empty lines in a row

#### tabs

Expect indentation with tabs. It will report on any space characters at begin of line, and mixed tabs and spaces.

#### ws-at-eol

Disallow whitespace characters at end of line

## Tests [![Build Status](https://travis-ci.org/medikoo/csslint-next.png)](https://travis-ci.org/medikoo/csslint-next)

	$ npm test
