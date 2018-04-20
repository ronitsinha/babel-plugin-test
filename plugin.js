const babelTemplate = require ('babel-template');
const t = require ('babel-types');

const template = babelTemplate(
	`

	`
);

module.exports = function () {
	return {
		visitor: {
			Identifier (path) {
				//console.log (path)
				if (path.node.name !== '_') {
					return;
				}

				path.node.name = 'console.log';
			},

			VariableDeclaration (path) {
				console.log (path.node);
			}
		}
	}
}

