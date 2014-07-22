'use strict';

var startsWith = require('es5-ext/string/#/starts-with');

module.exports = {
	id: 'tabs',
	name: "Indent with tabs",
	browsers: "All",

	init: function (parser, reporter) {
		var rule = this;
		reporter.lines.forEach(function (line, lineIndex) {
			var index;
			if (startsWith.call(line, ' ')) {
				reporter.report("Unexpected (space) at beginning of line", lineIndex + 1, 1, rule);
			}
			index = line.indexOf(' \t');
			if (index !== -1) {
				reporter.report("Unexpected (space) before (tab)", lineIndex + 1, index + 1, rule);
			}
			index = line.indexOf('\t ');
			if (index !== -1) {
				reporter.report("Unexpected (space) after (tab)", lineIndex + 1, index + 2, rule);
			}
		});
	}
};
