var fs = require ('file-system');

fs.readFile('index.js', (err, buf) => {
	if (err) throw err;

	code = buf.toString();

	eval (require ('babel-core').transform(code, {
		'plugins':'./plugin.js'
	}).code);
})