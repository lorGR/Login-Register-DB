"use strict";
exports.__esModule = true;
var express_1 = require("express");
var userCtrl_1 = require("../controllers/userCtrl");
var router = express_1["default"].Router();
router
    .post('/register', userCtrl_1.register)
    .post('/login', userCtrl_1.login)
    .post('/get-user', userCtrl_1.getUser);
exports["default"] = router;
