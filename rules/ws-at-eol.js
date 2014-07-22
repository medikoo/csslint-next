'use strict';

var re = /\s$/;

module.exports = {
	id: 'ws-at-eol',
	name: "Disallow whitespace characters at end of line",
	desc: "Whitespace character at end of line",
	browsers: "All",

	init: function (parser, reporter) {
		var rule = this;
		reporter.lines.forEach(function (line, lineIndex) {
			if (!re.test(line)) return;
			reporter.report(rule.desc, lineIndex + 1, line.length, rule);
		});
	}
};
