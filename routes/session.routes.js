const { Router } = require('express'),
    { login, register } = require('../controllers/session'),
    router = Router();

router.route("/api/v1/login")
    .post(login)

router.route("/api/v1/register")
    .post(register)


module.exports = router