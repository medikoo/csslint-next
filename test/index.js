'use strict';

var compare = function (a, b) {
	if (a.line !== b.line) return a.line - b.line;
	if (a.col !== b.col) return a.col - b.col;
	return a.message.toLowerCase().localeCompare(b.message.toLowerCase());
};

module.exports = function (t, a) {
	var rules = Object.create(null)
	  , tpl = '\nbody div { margin-right: 21}\n\n\n div \r{ foo: bar; } ';

	t.getRules().forEach(function (rule) {
		rules[rule.id] = rule;
	});
	a.deep(t.verify(tpl).messages.sort(compare), [{
		type: 'warning',
		line: 4,
		col: 1,
		message: rules['multi-eol'].desc,
		evidence: '',
		rule: rules['multi-eol']
	}, {
		type: 'warning',
		line: 5,
		col: 6,
		message: 'Unexpected Windows EOL (carriage return) character',
		evidence: ' div \r{ foo: bar; } ',
		rule: rules.eol
	}, {
		type: 'warning',
		line: 5,
		col: 20,
		message: rules['eol-at-eof'].desc,
		evidence: ' div \r{ foo: bar; } ',
		rule: rules['eol-at-eof']
	}, {
		type: 'warning',
		line: 5,
		col: 1,
		message: 'Unexpected (space) at beginning of line',
		evidence: ' div \r{ foo: bar; } ',
		rule: rules.tabs
	}, {
		type: 'warning',
		line: 5,
		col: 20,
		message: rules['ws-at-eol'].desc,
		evidence: ' div \r{ foo: bar; } ',
		rule: rules['ws-at-eol']
	}, {
		type: 'warning',
		line: 5,
		col: 9,
		message: 'Unknown property \'foo\'.',
		evidence: ' div \r{ foo: bar; } ',
		rule: rules['known-properties']
	}].sort(compare));
};
