"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _template = _interopRequireDefault(require("../template"));

var _models = require("../db/models");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.route('/').get(async (req, res) => {
  const posts = await _models.Post.findAll({
    include: _models.User
  });
  res.send((0, _template.default)({
    path: req.originalUrl,
    user: req.session.user,
    posts
  }));
});
var _default = router;
exports.default = _default;