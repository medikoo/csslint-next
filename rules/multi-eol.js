'use strict';

module.exports = {
	id: 'multi-eol',
	name: "Do not allow more than one empty line in a row",
	desc: "Unexpected empty line",
	browsers: "All",

	init: function (parser, reporter) {
		var rule = this, isAfterEol = false;
		reporter.lines.forEach(function (line, lineIndex) {
			if (line) {
				isAfterEol = false;
				return;
			}
			if (isAfterEol) reporter.report(rule.desc, lineIndex + 1, 1, rule);
			isAfterEol = true;
		});
	}
};
