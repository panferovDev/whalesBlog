"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MainPage;

var _react = _interopRequireWildcard(require("react"));

var _BlogForm = _interopRequireDefault(require("../BlogForm/BlogForm"));

var _CardItem = _interopRequireDefault(require("../CardItem/CardItem"));

var _Logo = _interopRequireDefault(require("../Logo/Logo"));

var _jsxFileName = "C:\\Users\\basic\\Documents\\elbrus\\whales\\deploy\\src\\components\\MainPage\\MainPage.jsx";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function MainPage({
  user,
  posts
}) {
  const [curPosts, setCurPosts] = (0, _react.useState)(posts);
  (0, _react.useEffect)(() => {
    if (!curPosts) {
      fetch('/posts').then(res => res.json()).then(res => setCurPosts(res)).catch(err => console.log(err));
    }
  }, []);

  const deletePostHandler = id => {
    fetch(`/posts/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    }).then(() => {
      setCurPosts(prev => prev.filter(el => el.id !== id));
    }).catch(err => console.log(err));
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Logo.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }), user && /*#__PURE__*/_react.default.createElement(_BlogForm.default, {
    setCurPosts: setCurPosts,
    user: user,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 16
    }
  }), curPosts && curPosts.map((el, index) => /*#__PURE__*/_react.default.createElement(_CardItem.default, {
    key: el.id,
    post: el,
    user: user,
    index: index,
    deletePostHandler: deletePostHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  })));
}