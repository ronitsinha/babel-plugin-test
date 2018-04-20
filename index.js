var babel = require ('babel-core');

var code = `
	if (true) {
		var hello = 'Hello World!';
		_(hello);
	}
`;

console.log (babel.transform(code, {
	'plugins':'./plugin.js'
}).code);

// log('Test!');