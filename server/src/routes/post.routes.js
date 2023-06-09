"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const router = express_1.Router();
router.route('/')
    .get(user_controller_1.getPosts)
    .post(user_controller_1.createPost);
router.route('/:userId')
    .get(user_controller_1.getPost)
    .delete(user_controller_1.deletePost)
    .put(user_controller_1.updatePost);
exports.default = router;
