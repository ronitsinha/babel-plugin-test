const t = require ('babel-types');

module.exports = function () {
	return {
		visitor: {
			Identifier (path) {
				//console.log (path)
				if (path.node.name !== 'print') {
					return;
				}

				path.node.name = 'console.log';
			},

			VariableDeclaration (path) {
				// console.log (path.node);
			}
		}
	}
}

