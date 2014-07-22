'use strict';

module.exports = {
	id: 'eol',
	name: "Restrict Linux EOL's",
	browsers: "All",

	init: function (parser, reporter) {
		var rule = this;
		reporter.lines.forEach(function (line, lineIndex) {
			var index = line.indexOf('\r');
			if (index === -1) return;
			reporter.report("Unexpected Windows EOL (carriage return) character",
				lineIndex + 1, index + 1, rule);
		});
	}
};
