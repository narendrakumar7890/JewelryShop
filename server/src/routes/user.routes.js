"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const router = express_1.Router();
router.route('/')
    .get(user_controller_1.getUsers);
//.post(createPost);
// router.route('/:postId')
//     .get(getPost)
//     .delete(deletePost)
//     .put(updatePost);
exports.default = router;
