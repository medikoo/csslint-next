'use strict';

var CSSLint = require('../../lib/csslint').CSSLint;

module.exports = function (t, a) {
	var tpl = '\n body div { margin-right: 21px;}\ndiv \t{ margin: 20px; }\n' +
		'div\t { margin: 20px; }\n\tdiv { margin: 20px; }\n';

	CSSLint.addRule(t);
	a.deep(CSSLint.verify(tpl).messages, [{
		type: 'warning',
		line: 2,
		col: 1,
		message: 'Unexpected (space) at beginning of line',
		evidence: ' body div { margin-right: 21px;}',
		rule: t
	}, {
		type: 'warning',
		line: 3,
		col: 4,
		message: 'Unexpected (space) before (tab)',
		evidence: 'div \t{ margin: 20px; }',
		rule: t
	}, {
		type: 'warning',
		line: 4,
		col: 5,
		message: 'Unexpected (space) after (tab)',
		evidence: 'div\t { margin: 20px; }',
		rule: t
	}]);
};
