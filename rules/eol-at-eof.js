'use strict';

var last = require('es5-ext/array/#/last');

module.exports = {
	id: 'eol-at-eof',
	name: "Require EOL at EOF",
	desc: "Missing end of line at end of file",
	browsers: "All",

	init: function (parser, reporter) {
		var rule = this, lastLine = last.call(reporter.lines);
		if (lastLine === '') return;
		reporter.report(rule.desc, reporter.lines.length, lastLine.length, rule);
	}
};
