"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userCheck = void 0;

const userCheck = (req, res, next) => {
  if (req.session.user && req.originalUrl !== '/user/logout') {
    return res.redirect('/');
  }

  return next();
};

exports.userCheck = userCheck;