import { Request, Response } from 'express'

// DB
import { connect } from '../database'
// Interfaces
import { Post } from '../interface/User'

export async function getUsers(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await connect();
        const users = await conn.query('SELECT * FROM user');
        return res.json(users[0]);
    }
    catch (e) {
        console.log(e)
    }
}

export async function createUser(req: Request, res: Response) {
    const newPost: Post = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO user SET ?', [newPost]);
    res.json({
        message: 'New Post Created'
    });
}
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