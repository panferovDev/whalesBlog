"use strict";

var _express = _interopRequireDefault(require("express"));

var _middleWares = require("./middleWares");

var _indexRouter = _interopRequireDefault(require("./routes/indexRouter"));

var _userRouter = _interopRequireDefault(require("./routes/userRouter"));

var _postRouter = _interopRequireDefault(require("./routes/postRouter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

const session = require('express-session');

const FileStore = require('session-file-store')(session);

const PORT = process.env.PORT || 3000;
const app = (0, _express.default)();
app.use(_express.default.static('public'));
app.use(_express.default.json());
app.use(session({
  name: 'sId',
  store: new FileStore({}),
  secret: 'fjdsfhsue',
  resave: false,
  saveUninitialized: false
}));
app.use('/', _indexRouter.default);
app.use('/posts', _postRouter.default);
app.use(_middleWares.userCheck);
app.use('/user', _userRouter.default);
app.listen(PORT, () => {
  console.log('Server start on ', PORT);
});