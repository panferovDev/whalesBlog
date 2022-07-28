"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _response = require("express/lib/response");

var _template = _interopRequireDefault(require("../template"));

var _models = require("../db/models");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.route('/signup').get((req, res) => {
  res.send((0, _template.default)({
    path: req.originalUrl
  }));
}).post(async (req, res) => {
  const {
    name,
    email,
    password
  } = req.body;

  if (name && email && password) {
    try {
      const [user] = await _models.User.findOrCreate({
        where: {
          name,
          email,
          password: await _bcrypt.default.hash(password, 10)
        }
      });
      req.session.user = {
        id: user.id,
        name
      };
      return res.json({
        id: user.id,
        name
      });
    } catch (err) {
      console.log(err);
      return res.sendStatus(500);
    }
  }

  res.sendStatus(200);
});
router.route('/signin').get((req, res) => {
  res.send((0, _template.default)({
    path: req.originalUrl
  }));
}).post(async (req, res) => {
  const {
    email,
    password
  } = req.body;

  if (email && password) {
    try {
      const user = await _models.User.findOne({
        where: {
          email
        }
      });

      if (user && (await _bcrypt.default.compare(password, user.password))) {
        req.session.user = {
          id: user.id,
          name: user.name
        };
        return res.json({
          id: user.id,
          name: user.name
        });
      }

      return res.sendStatus(401);
    } catch (err) {
      console.log(err);
      return res.sendStatus(500);
    }
  }

  return (0, _response.sendStatus)(401);
});
router.route('/logout').get((req, res) => {
  req.session.destroy();
  res.clearCookie('sId').redirect('/');
});
var _default = router;
exports.default = _default;