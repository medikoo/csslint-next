'use strict';

module.exports = exports = require('./lib/csslint').CSSLint;

exports.addRule(require('./rules/eol'));
exports.addRule(require('./rules/eol-at-eof'));
exports.addRule(require('./rules/tabs'));
exports.addRule(require('./rules/multi-eol'));
