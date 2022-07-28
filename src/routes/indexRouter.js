import express from 'express';
import template from '../template';
import { User, Post } from '../db/models';

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    const posts = await Post.findAll({ include: User });
    res.send(template({ path: req.originalUrl, user: req.session.user, posts }));
  });

export default router;
