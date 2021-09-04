.PHONY: gatsby-build
gatsby-build:
	gatsby build && gatsby serve

build:
	gatsby build && gatsby serve

.PHONY: setup
setup:
	npm install --legacy-peer-deps

.PHONY: site
site:
	npm start

.PHONY: npm-build
npm-build:
	npm run build

.PHONY: npm-audit-fix
npm-audit-fix:
	npm audit fix
