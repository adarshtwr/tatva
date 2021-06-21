const UserController = require("../controllers/user.controller.js");

module.exports = (router, preFix) => {
    router.post(preFix + '/register', UserController.register)
    router.post(preFix + '/login', UserController.login)
    router.get(preFix + '/fetch-list', UserController.fetch)
}