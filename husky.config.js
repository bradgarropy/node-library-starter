const config = {
    hooks: {
        "pre-commit": "npm run lint:fix && npm run format:fix",
    },
}

module.exports = config
