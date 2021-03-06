'use strict';

var CSSLint = require('../../lib/csslint').CSSLint;

module.exports = function (t, a) {
	var tpl = '\nbody div { margin-right: 21px;}\ndiv { margin: 20px; }\n\n';

	CSSLint.addRule(t);
	a.deep(CSSLint.verify(tpl).messages, [{
		type: 'warning',
		line: 5,
		col: 1,
		message: t.desc,
		evidence: '',
		rule: t
	}]);
};
