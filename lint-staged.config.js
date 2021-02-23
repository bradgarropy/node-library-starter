const config = {
    "*.{css, html, json, md, yml}": ["npm run lint:fix"],
    "*.{js, jsx, ts, tsx}": ["npm run lint:fix", "npm run format:fix"],
}

module.exports = config
