"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _models = require("../db/models");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.route('/').get(async (req, res) => {
  const posts = await _models.Post.findAll({
    include: _models.User
  });
  res.json(posts);
}).post(async (req, res) => {
  try {
    const post = await _models.Post.create({ ...req.body,
      user_id: req.session.user.id
    });
    return res.json(post);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
});
router.route('/:id').delete(async (req, res) => {
  try {
    await _models.Post.destroy({
      where: {
        id: req.params.id
      }
    });
    return res.sendStatus(200);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
});
var _default = router;
exports.default = _default;