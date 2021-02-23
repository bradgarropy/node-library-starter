const config = {
    hooks: {
        // "pre-commit": "npm run lint:fix && npm run format:fix",
        "pre-commit": "npm test",
    },
}

module.exports = config
