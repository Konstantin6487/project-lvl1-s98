install:
	npm install -s
start:
	npm run babel-node -- src/bin/brain-games.js
brain-even:
	npm run babel-node -- src/bin/brain-even.js
brain-calc:
	npm run babel-node -- src/bin/brain-calc.js
brain-gcd:
		npm run babel-node -- src/bin/brain-gcd.js
publish:
	npm publish -s
lint:
	npm run eslint
