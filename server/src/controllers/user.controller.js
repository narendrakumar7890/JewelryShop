"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// DB
const database_1 = require("../database");
function getUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield database_1.connect();
            const users = yield conn.query('SELECT * FROM user');
            return res.json(users[0]);
        }
        catch (e) {
            console.log(e);
        }
    });
}
exports.getUsers = getUsers;
//
// export async function createPost(req: Request, res: Response) {
//     const newPost: Post = req.body;
//     const conn = await connect();
//     await conn.query('INSERT INTO posts SET ?', [newPost]);
//     res.json({
//         message: 'New Post Created'
//     });
// }
//
// export async function getPost(req: Request, res: Response) {
//     const id = req.params.postId;
//     const conn = await connect();
//     const posts = await conn.query('SELECT * FROM posts WHERE id = ?', [id]);
//     res.json(posts[0]);
// }
//
// export async function deletePost(req: Request, res: Response) {
//     const id = req.params.postId;
//     const conn = await connect();
//     await conn.query('DELETE FROM posts WHERE id = ?', [id]);
//     res.json({
//         message: 'Post deleted'
//     });
// }
//
// export async function updatePost(req: Request, res: Response) {
//     const id = req.params.postId;
//     const updatePost: Post = req.body;
//     const conn = await connect();
//     await conn.query('UPDATE posts set ? WHERE id = ?', [updatePost, id]);
//     res.json({
//         message: 'Post Updated'
//     });
// }
