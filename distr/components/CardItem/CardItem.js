"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CardItem;

var _react = _interopRequireDefault(require("react"));

var _framerMotion = require("framer-motion");

var _jsxFileName = "C:\\Users\\basic\\Documents\\elbrus\\whales\\deploy\\src\\components\\CardItem\\CardItem.jsx";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CardItem({
  post,
  user,
  deletePostHandler,
  index
}) {
  const variants = {
    visible: i => ({
      opacity: 1,
      transition: {
        delay: i * 0.5
      }
    }),
    hidden: {
      opacity: 0
    }
  };
  return /*#__PURE__*/_react.default.createElement(_framerMotion.motion.div, {
    className: "card border-primary mt-3 mb-3",
    variants: variants,
    initial: "hidden",
    animate: "visible",
    custom: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, post?.User?.name, ' ', "\u043F\u0438\u0448\u0435\u0442..."), /*#__PURE__*/_react.default.createElement("div", {
    className: "card-body text-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react.default.createElement("h5", {
    className: "card-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, post.title), /*#__PURE__*/_react.default.createElement("p", {
    className: "card-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, post.body), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: `btn btn-danger ${user?.id === post.user_id ? null : 'disabled'}`,
    onClick: () => deletePostHandler(post.id),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, "\u2715")));
}