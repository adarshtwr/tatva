const users = require("./user")

module.exports = (router) => {
    users(router, '/user');

    return router;
}