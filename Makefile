install:
	npm install -s
start:
	npm run babel-node -- src/bin/brain-games.js
publish:
	npm publish -s
lint:
	npm run eslint
