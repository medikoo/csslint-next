'use strict';

var CSSLint = require('../../lib/csslint').CSSLint;

module.exports = function (t, a) {
	var tpl = '\nbody div { margin-right: 21px;}\ndiv { margin: 20px; } \n';

	CSSLint.addRule(t);
	a.deep(CSSLint.verify(tpl).messages, [{
		type: 'warning',
		line: 3,
		col: 22,
		message: t.desc,
		evidence: 'div { margin: 20px; } ',
		rule: t
	}]);
};
