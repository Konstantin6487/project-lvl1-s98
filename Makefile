install:
	npm install -s
brain-even:
	npm run babel-node -- src/bin/brain-even.js
brain-calc:
	npm run babel-node -- src/bin/brain-calc.js
brain-gcd:
		npm run babel-node -- src/bin/brain-gcd.js
brain-balance:
	npm run babel-node -- src/bin/brain-balance.js
brain-progression:
	npm run babel-node -- src/bin/brain-progression.js
publish:
	npm publish -s
lint:
	npm run eslint
