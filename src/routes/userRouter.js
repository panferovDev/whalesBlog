import express from 'express';
import bcrypt from 'bcrypt';
import { sendStatus } from 'express/lib/response';
import template from '../template';
import { User } from '../db/models';

const router = express.Router();

router.route('/signup')
  .get((req, res) => {
    res.send(template({ path: req.originalUrl }));
  })
  .post(async (req, res) => {
    const { name, email, password } = req.body;
    if (name && email && password) {
      try {
        const [user] = await User.findOrCreate({
          where: {
            name, email, password: await bcrypt.hash(password, 10),
          },
        });
        req.session.user = { id: user.id, name };
        return res.json({ id: user.id, name });
      } catch (err) {
        console.log(err);
        return res.sendStatus(500);
      }
    }
    res.sendStatus(200);
  });

router.route('/signin')
  .get((req, res) => {
    res.send(template({ path: req.originalUrl }));
  })
  .post(async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
      try {
        const user = await User.findOne({ where: { email } });
        if (user && await bcrypt.compare(password, user.password)) {
          req.session.user = { id: user.id, name: user.name };
          return res.json({ id: user.id, name: user.name });
        }
        return res.sendStatus(401);
      } catch (err) {
        console.log(err);
        return res.sendStatus(500);
      }
    }
    return sendStatus(401);
  });

router.route('/logout')
  .get((req, res) => {
    req.session.destroy();
    res.clearCookie('sId').redirect('/');
  });

export default router;
