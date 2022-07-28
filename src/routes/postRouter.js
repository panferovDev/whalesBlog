import express from 'express';
import { Post, User } from '../db/models';

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    const posts = await Post.findAll({ include: User });
    res.json(posts);
  })
  .post(async (req, res) => {
    try {
      const post = await Post.create({ ...req.body, user_id: req.session.user.id });
      return res.json(post);
    } catch (err) {
      console.log(err);
      return res.sendStatus(500);
    }
  });

router.route('/:id')
  .delete(async (req, res) => {
    try {
      await Post.destroy({ where: { id: req.params.id } });
      return res.sendStatus(200);
    } catch (err) {
      console.log(err);
      return res.sendStatus(500);
    }
  });

export default router;
